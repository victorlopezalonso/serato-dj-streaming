module.exports = {
  pluginOptions: {
      electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        publish: [{
          provider: 'github',
        }]
      }
      }
  }
}