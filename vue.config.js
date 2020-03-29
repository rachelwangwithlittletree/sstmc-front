module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components"
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