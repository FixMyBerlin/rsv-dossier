const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

const pathsToPublish = ['/'];
exports.onCreatePage = ({ page, actions: { deletePage }}) => {
  if (!pathsToPublish.includes(page.path)) {
    deletePage(page);
  }
};
