import { createFileNodeFromBuffer } from 'gatsby-source-filesystem';
import { Validator, ValidationError } from 'jsonschema';
import { Buffer } from 'buffer';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import simplify from '@turf/simplify';
import { staticMapRequest } from './src/utils';
import metaJsonSchema from './data/schema/meta.schema.json' assert { type: 'json' };
import geometryJsonSchema from './data/schema/geometry.schema.json' assert { type: 'json' };

export const onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

// create a static map image for every RSV
export const createSchemaCustomization = ({ actions: { createTypes } }) => {
  createTypes(`
    type MetaJson implements Node {
      geoJson: GeometryJson! @link(from: "jsonId", by: "jsonId")
      staticMap: File! @link(from: "jsonId", by: "name")
    }
  `);
};

export const onPostBootstrap = ({ getNodesByType, reporter }) => {
  const geometries: string[] = getNodesByType('GeometryJson').map(
    (x) => x.jsonId
  );
  const meta: string[] = getNodesByType('MetaJson').map((x) => x.jsonId);
  const geometrySet = new Set(geometries);
  const missingGeometries = [...meta].filter((x) => !geometrySet.has(x));
  if (missingGeometries.length !== 0) {
    // build symmetric difference to display unmatching data (list might be longer than |nGeometries - nMeta|)
    reporter.error(
      `Provided data is incomplete. The following instances have no geometry files:\n${JSON.stringify(
        missingGeometries
      )}`
    );
  }
  const metaSet = new Set(meta);
  const missingMeta = [...geometries].filter((x) => !metaSet.has(x));
  if (missingMeta.length !== 0) {
    reporter.error(
      `Provided data is incomplete. The following instances have no meta information:\n${JSON.stringify(
        missingMeta
      )}`
    );
  }
};

export const onCreateNode = async ({
  reporter,
  node,
  actions: { createNode },
  createNodeId,
  cache,
}) => {
  const jsonValidator = new Validator();
  const jsonSchema = {
    MetaJson: metaJsonSchema,
    GeometryJson: geometryJsonSchema,
  };
  const nodeType = node.internal.type;
  if (nodeType === 'MetaJson' || nodeType === 'GeometryJson') {
    // validate meta data against JSON schema
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, jsonId, parent, children, internal, ...json } = node;
    try {
      jsonValidator.validate({ id: jsonId, ...json }, jsonSchema[nodeType], {
        throwError: true,
      });
    } catch (e) {
      if (e instanceof ValidationError) {
        reporter.error(`$In ${nodeType} instance ${jsonId}:\n\n`, e);
      } else throw e;
    }
  }

  if (nodeType === 'GeometryJson') {
    // generate static map from geometry
    const url = staticMapRequest(node, [1920, 1920]);
    // have to use createFileNodeFromBuffer due to url length limits in createRemoteFileNode :/
    let response = await fetch(url.toString());
    // if the URL is too long we'll get an `414` from MapTiler. In this case we'll try to simplify the geometry until the URL is short enough
    let tolerance = 0.000001;
    while (response.status === 414) {
      const simplified = simplify(node, { tolerance, highQuality: true });
      const simplifiedUrl = staticMapRequest(simplified, [1920, 1920]);
      // eslint-disable-next-line no-await-in-loop
      response = await fetch(simplifiedUrl.toString());
      tolerance *= 2;
    }

    const arrBuffer = await response.arrayBuffer();
    createFileNodeFromBuffer({
      buffer: Buffer.from(arrBuffer),
      name: node.jsonId,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      cache,
    });
  }
};
