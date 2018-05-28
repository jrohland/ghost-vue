module.exports = {
  lintOnSave: true,
  devServer: {
    inline: true,
    proxy: {
      '/content': {
        target: 'http://localhost:2368',
        changeOrigin: true
      }
    }
  }
}
