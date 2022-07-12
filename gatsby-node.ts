import { createFileNodeFromBuffer } from 'gatsby-source-filesystem';
import { Buffer } from 'buffer';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import simplify from '@turf/simplify';
import fetch from 'node-fetch';
import { staticMapRequest } from './src/utils';

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
      geoJson: GeometryJson @link(from: "jsonId", by: "name")
      staticMap: File @link(from: "jsonId", by: "name")
    }
  `);
};

export const onCreateNode = async ({
  node,
  actions: { createNode },
  createNodeId,
  cache,
}) => {
  if (node.internal.type === 'GeometryJson') {
    const url = staticMapRequest(node, [1920, 1920]);
    // have to use createFileNodeFromBuffer due to url length limits in createRemoteFileNode :/
    let response = await fetch(url.toString());

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
      name: node.name,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      cache,
    });
  }
};
