module.exports = {
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  transpileDependencies: [
    'quasar'
  ],
  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
          args[0].title = "Guan LS Auto Service";
          return args;
        })
  }
}
