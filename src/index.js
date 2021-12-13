const { Notification } = require('copha')
const notifier = require('node-notifier')

class native extends Notification {
    constructor(){
        super()
    }

    send(msg){
        notifier.notify({
            title: 'Copha notification',
            message: msg
          })
    }

}

module.exports = native