// 插件的结构 class
// 必须包含apply方法

class TxtWebpackPlugin {
  constructor(options) {
    console.log("TxtWebpackPlugin options:", options);
  }

  apply(compiler) {
    compiler.hooks.emit.tapAsync("TxtWebpackPlugin", (compilation, cb) => {
      console.log(compilation.assets);

      const content = "这是一个测试文档";
      compilation.assets["test.txt"] = {
        source: function () {
          return content;
        },
        size: function () {
          return content.length;
        },
      };
      cb();
    });
  }
}

module.exports = TxtWebpackPlugin;
