const path = require("path");
const resolve = function(dir) {
  return path.join(__dirname, dir);
};
module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
        globalVars: {
          primary: "#fff"
        }
      }
    }
  },
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: true,
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("views", resolve("src/views"))
      .set("components", resolve("src/components"))
      .set("common", resolve("src/utils"))
      .set("assets", resolve("src/assets"));
    config.optimization.runtimeChunk("single");
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap(options => {
        // 修改它的选项...
        return options;
      });
    config.module
      .rule("images")
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use("url-loader")
      .loader("url-loader")
      .tap(options => {
        options.limit = 1000;
        return options;
      });  
  },
  devServer: {
    host: "localhost",
    port: "8080",
    hot: true,
    open: false,
    overlay: {
      warning: false
    },
    proxy: {
      "/api": {
        target: "http://m260048y71.zicp.vip", //
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
