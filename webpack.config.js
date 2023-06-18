const { resolve } = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: resolve(__dirname, "./dist"),
    filename: "[name].js",
  },
  mode: "development",
  resolveLoader: {
    modules: ["node_modules", "loaders"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["my-style-loader", "my-css-loader", "less-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/public/index.html",
      filename: "index.html",
      chunks: ["index"],
    }),
    new MiniCssExtractPlugin(),
  ],
};
