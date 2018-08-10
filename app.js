
// const os = require('os');

// console.log('Free memory is: ' + os.freemem());
// console.log('Total memory is: ' + os.totalmem());


// Template String
// console.log(`Free memory is:  ${os.freemem()}`);
// console.log(`Total memory is: ${os.totalmem()}`);

const EventEmitter = require('events');
const myEmitter    = new EventEmitter();

// Register a Listener
myEmitter.on('EventRaised', function(){
    console.log('This message from Event Raised. ');
});
// Raised An Event
myEmitter.emit('EventRaised');

// Register a listener with data
// myEmitter.on('EventWithData', function(args){
//     console.log(args);
// });
// Raised an event with data.
// myEmitter.emit('EventWithData', {'id':1, 'url':'www.domain.com'});


// Register an Arrow Functions Listener
// myEmitter.on('arrowFunctions', (args)=>{
//     console.log(args);
// });
// Raised an arrow functions with data.
// myEmitter.emit('arrowFunctions', { 'id':1, 'url':'www.demo.com', 'user':'Hasan Ahmed'});
