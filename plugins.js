const webpack = require("webpack");
const config = require("./webpack.config.js");

const compiler = webpack(config);

Object.keys(compiler.hooks).forEach((hookName) => {
  compiler.hooks[hookName].tap("事件名称", () => {
    console.log(`run ----> ${hookName}`);
  });
});

compiler.run();
