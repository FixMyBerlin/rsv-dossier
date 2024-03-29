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
    let url = staticMapRequest(node, [1920, 1920]).toString();
    let tolerance = 0.000001;
    // respect the MapTiler URL limit
    while (url.length > 8192) {
      const simplified = simplify(node, { tolerance, highQuality: true });
      url = staticMapRequest(simplified, [1920, 1920]).toString();
      tolerance *= 2;
    }
    const response = await fetch(url);

    // have to use createFileNodeFromBuffer due to url length limits in createRemoteFileNode :/
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

// link geometry and staticMap to metaJson nodes
export const createSchemaCustomization = ({
  actions: { createTypes, createFieldExtension },
}) => {
  if (process.env.FAST_BUILD === '1') {
    // eslint-disable-next-line no-console
    console.info(
      'createSchemaCustomization() will run with process.env.FAST_BUILD=1'
    );
    createFieldExtension({
      name: 'defaultMap',
      extend() {
        return {
          type: 'File',
          resolve(source, args, context) {
            return context.nodeModel.findOne({
              query: { filter: { name: { eq: 'default_map' } } },
              type: 'File',
            });
          },
        };
      },
    });
    createTypes(`
    type MetaJson implements Node {
      geoJson: GeometryJson! @link(from: "jsonId", by: "name")
      staticMap: File! @defaultMap
    }
  `);
  } else {
    // eslint-disable-next-line no-console
    console.info(
      'createSchemaCustomization() will run with process.env.FAST_BUILD=0/null and not generate staticMaps'
    );
    createTypes(`
    type MetaJson implements Node {
      geoJson: GeometryJson! @link(from: "jsonId", by: "name")
      staticMap: File! @link(from: "jsonId", by: "name")
    }
  `);
  }
};
