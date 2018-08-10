const EventEmitter = require('events');

// Add Log module.
const logger = require('./log');

// Create a Log Module Event Object
const myLogger = new logger();


// Register an event listener
// When 'eventFromLogModule' emit will invoked then this will be executed. 
myLogger.on('eventFromLogModule', function(args){
    console.log('Listener Data is ', args);
});


// invoked userLog method from Log Module.
myLogger.userLog('This is my Message');

