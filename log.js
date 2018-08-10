    const EventEmitter = require('events');

    class  MyEventEmitter extends EventEmitter{

        userLog(msg){
            console.log('User MSG is: ' + msg);
            // Raised an event
            this.emit('eventFromLogModule', {'data1':'Hello', 'data2':'world'} );
        }
    }

    module.exports = MyEventEmitter;
