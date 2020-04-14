module.exports = {
  publicPath: "./",
  outputDir: "dist",
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        views: "@/views"
      }
    }
  },
  css: {
    loaderOptions: {
      // 向 CSS 相关的 loader 传递选项

      less: {
        javascriptEnabled: true
      }
    }
  }
};