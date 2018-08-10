const EventEmitter = require('events');
const myEmitter    = new EventEmitter();

// Register a listener with data
myEmitter.on('EventWithData', function(args){
    console.log(args);
});

// Raised an event with data.
myEmitter.emit('EventWithData', {'id':1, 'url':'www.domain.com'});
