import { createRemoteFileNode } from 'gatsby-source-filesystem';
import { staticMapRequest } from './src/staticmap';

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

// Download static maps for every rsv
exports.onCreateNode = async ({
  node,
  actions: { createNode, createNodeField },
  createNodeId,
  cache,
  store,
  reporter,
}) => {
  // For all RSVs create a static map image of the geometries
  if (
    node.internal.type === 'GeometriesJson' &&
    staticMapRequest(node).toString().length < 1960
  ) {
    const url = staticMapRequest(node).toString();
    console.log(`${node.name} len: ${url.length}`);
    console.log(url);
    const fileNode = await createRemoteFileNode({
      url,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      cache,
      store,
      reporter,
    });
    if (fileNode) {
      createNodeField({
        node,
        name: 'staticMap',
        value: fileNode.id,
      });
    }
  }
};
