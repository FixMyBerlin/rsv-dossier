import { createFileNodeFromBuffer } from 'gatsby-source-filesystem';
import axios from 'axios';
import { staticMapRequest } from './src/staticmap';

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

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
      geoJson: GeometryJson @link(from: "jsonId", by: "name")
      staticMap: File @link(from: "jsonId", by: "name")
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
  if (node.internal.type === 'GeometryJson') {
    const url = staticMapRequest(node, [1920, 1920]);

    // have to use createFileNodeFromBuffer due to url length limits in createRemoteFileNode :/
    const response = await axios.get(url.toString(), {
      responseType: 'arraybuffer',
    });
    createFileNodeFromBuffer({
      buffer: response.data,
      name: node.name,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      cache,
      store,
    });
  }
};
