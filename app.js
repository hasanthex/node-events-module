const EventEmitter = require('events');
const myEmitter    = new EventEmitter();

// Register a Listener
myEmitter.on('EventRaised', function(){
    console.log('This message from Event Raised. ');
});

// Raised An Event
myEmitter.emit('EventRaised');
