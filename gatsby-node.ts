import { createFileNodeFromBuffer } from 'gatsby-source-filesystem';
import fetch from 'node-fetch';
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
  const nGeometries = getNodesByType('GeometryJson').length;
  const nMeta = getNodesByType('MetaJson').length;
  if (nGeometries !== nMeta) {
    reporter.error(
      `The provided number of geometries (${nGeometries}) does no match the number of meta information (${nMeta})`
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
        reporter.error(`${jsonId}:\n\n`, e);
      } else throw e;
    }
  }

  if (nodeType === 'GeometryJson') {
    // generate static map from geometry
    const url = staticMapRequest(node, [1920, 1920]);
    // have to use createFileNodeFromBuffer due to url length limits in createRemoteFileNode :/
    let response = await fetch(url.toString());

    // if the URL is too long we'll get an `414` from MapTiler
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
