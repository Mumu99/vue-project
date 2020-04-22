module.exports = {
  // lintOnSave: false, // 关闭语法检查
  devServer: {
    proxy: {
      '/api': {
        target: 'http://47.93.148.192/', //! 目标地址
        changeOrigin: true //! 是否进行跨域
        // pathRewrite: {
        //   '^/api/old-path': '/api/new-path', // rewrite path
        // }
      }
    }
  }
}