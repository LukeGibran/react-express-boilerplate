const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
    proxy: {
      "/api": "http://localhost:5001",
    },
    open: true,
    compress: true,
    hot: true,
    port: 3000,
  },
});
