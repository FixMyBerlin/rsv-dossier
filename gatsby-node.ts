import { createFileNodeFromBuffer } from 'gatsby-source-filesystem';
import fetch from 'node-fetch';
import { Buffer } from 'buffer';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import { staticMapRequest } from './src/utils';

console.log(process.env['NODE_ENV']);

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

// create a static map image for every RSV
exports.onCreateNode = async ({
  node,
  actions: { createNode },
  createNodeId,
  cache,
  store,
}) => {
  if (node.internal.type === 'GeometryJson') {
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

// link geometry and staticMap to metaJson nodes
exports.createSchemaCustomization = ({
  actions: { createTypes, createFieldExtension },
}) => {
  createFieldExtension({
    name: 'defaultMap',
    extend(options, prevFieldConfig) {
      return {
        type: 'File',
        resolve(source, args, context, info) {
          return context.nodeModel.findOne({
            type: 'File',
          });
        },
      };
    },
  });
  if (process.env['NODE_ENV'] !== 'production') {
    createTypes(`
    type MetaJson implements Node {
      geoJson: GeometryJson @link(from: "jsonId", by: "name")
      staticMap: File @defaultMap
    }
  `);
  } else {
    createTypes(`
    type MetaJson implements Node {
      geoJson: GeometryJson @link(from: "jsonId", by: "name")
      staticMap: File @link(from: "jsonId", by: "name")
    }
  `);
  }
};
