const path = require('path')
const notifier = require('node-notifier')
// Object
;(async ()=>{
    notifier.notify({
        title: 'My notification',
        message: 'Hello, there!',
        icon: path.join(__dirname, '../src/resource/icon_x128.png'),
        sound: true,
        wait: false,
        timeout: 5
      })
})()