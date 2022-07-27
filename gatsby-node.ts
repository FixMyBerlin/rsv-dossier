import { createFileNodeFromBuffer } from 'gatsby-source-filesystem';
import fetch from 'node-fetch';
import { Validator } from 'jsonschema';
import { Buffer } from 'buffer';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import { getGraphqlSchemaFromJsonSchema } from 'get-graphql-from-jsonschema';
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
exports.createSchemaCustomization = ({
  actions: { createTypes, addThirdPartySchema },
}) => {
  // const geometrySchema = getGraphqlSchemaFromJsonSchema({
  //   rootName: 'geometryJson',
  //   schema: geometryJsonSchema,
  // });
  // console.log(geometrySchema);
  // geometrySchema.typeDefinitions.forEach(createTypes);
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
  const jsonValidator = new Validator();

  if (node.internal.type === 'MetaJson') {
    const { id, jsonId, parent, children, internal, ...metaJson } = node;
    const result = jsonValidator.validate(
      { id: jsonId, ...metaJson },
      metaJsonSchema
    );
    if (!result.valid) {
      console.log(`errors in ${jsonId}:`);
      console.log(result.errors);
    }
  }

  if (node.internal.type === 'GeometryJson') {
    const { id, jsonId, parent, children, internal, ...geometryJson } = node;
    const result = jsonValidator.validate(geometryJson, geometryJsonSchema);
    if (!result.valid) {
      console.log(`errors in ${node.name}:`);
      console.log(result.errors);
    }
    // geometryValidator.validate()
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
