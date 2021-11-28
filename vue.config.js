module.exports = {
  pluginOptions: {
      electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        publish: [{
          provider: 'github',
        }],
        // mac: {
        //   target: [{
        //     target: 'dmg'
        //   }],
        // },
        linux: {
          target: [{
            target: 'AppImage'
          }]
        }
      }
      }
  }
}