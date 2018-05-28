const ghostHost = 'https://ghostblog.com'

module.exports = {
  lintOnSave: true,
  devServer: {
    inline: true,
    proxy: {
      '/content': {
        target: ghostHost,
        changeOrigin: true
      },
      '/ghost-sdk': {
        target: ghostHost,
        pathRewrite: () => {
          return '/public/ghost-sdk.min.js'
        }
      }
    }
  }
}
