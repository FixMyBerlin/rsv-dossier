import { createFileNodeFromBuffer } from 'gatsby-source-filesystem';
import fetch from 'node-fetch';
import { Validator, ValidationError } from 'jsonschema';
import { Buffer } from 'buffer';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import { staticMapRequest } from './src/utils';
import metaJsonSchema from './data/schema/meta.schema.json' assert { type: 'json' };
import geometryJsonSchema from './data/schema/geometry.schema.json' assert { type: 'json' };

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

// create a static map image for every RSV
exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
  createTypes(`
    type MetaJson implements Node {
      geoJson: GeometryJson! @link(from: "jsonId", by: "name")
      staticMap: File! @link(from: "jsonId", by: "name")
    }
  `);
};

exports.onCreateNode = async ({
  node,
  actions: { createNode },
  createNodeId,
  cache,
  store,
}) => {
  const jsonValidator = new Validator();

  if (node.internal.type === 'MetaJson') {
    const { id, jsonId, parent, children, internal, ...metaJson } = node;

    // validate meta data against JSON schema
    try {
      jsonValidator.validate({ id: jsonId, ...metaJson }, metaJsonSchema, {
        throwError: true,
      });
    } catch (e) {
      if (e instanceof ValidationError) {
        console.error(e);
      } else throw e;
    }
  }

  if (node.internal.type === 'GeometryJson') {
    const { id, jsonId, parent, children, internal, ...geometryJson } = node;

    // validate geometry against JSON schema
    try {
      jsonValidator.validate(geometryJson, geometryJsonSchema, {
        throwError: true,
      });
    } catch (e) {
      if (e instanceof ValidationError) {
        console.error(e);
      } else throw e;
    }

    // generate static map from geometry
    const url = staticMapRequest(node, [1920, 1920]);
    // have to use createFileNodeFromBuffer due to url length limits in createRemoteFileNode :/
    const arrBuffer = await fetch(url.toString()).then((response) =>
      response.arrayBuffer()
    );

    createFileNodeFromBuffer({
      buffer: Buffer.from(arrBuffer),
      name: node.name,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      cache,
      store,
    });
  }
};
