const EventEmitter = require('events');
const myEmitter    = new EventEmitter();


// Register an Arrow Functions Listener
myEmitter.on('arrowFunctions', (args)=>{
    console.log(args);
});

// Raised an arrow functions with data.
myEmitter.emit('arrowFunctions', { 'id':1, 'url':'www.demo.com', 'user':'Muhammad Hasan'});
