const { resolve, join } = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { globSync } = require("glob");

const setMpa = () => {
  const entry = {};
  const htmlwebpackplugins = [];
  const entryPath = globSync("./src/*/index.js");
  entryPath.forEach((item) => {
    const entryName = item.match(/src\\(.*)\\index\.js$/)[1];
    entry[entryName] = `./${item}`;
    htmlwebpackplugins.push(
      new HtmlWebpackPlugin({
        template: `./src/${entryName}/index.html`,
        filename: `${entryName}.html`,
        chunks: [entryName],
      })
    );
  });
  return { entry, htmlwebpackplugins };
};

const { entry, htmlwebpackplugins } = setMpa();

module.exports = {
  entry,
  output: {
    path: resolve(__dirname, "./mpa"),
    filename: "[name].js",
    assetModuleFilename: "images/[name][ext][query]",
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
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["postcss-preset-env"]],
              },
            },
          },
          "less-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        type: "asset",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    ...htmlwebpackplugins,
    new MiniCssExtractPlugin(),
  ],
};
