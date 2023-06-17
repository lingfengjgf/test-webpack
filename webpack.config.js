const { resolve } = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: resolve(__dirname, "./dist"),
    filename: "index.js",
  },
  mode: "development",
  plugins: [new CleanWebpackPlugin()],
};
