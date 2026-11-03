/* */
const EventEmitter = require("events");

const emitter = new EventEmitter();

// Callback function
const greet = () => {
    console.log("Hello Sachin");
};

// Listener register
emitter.on("greet", greet);

// Listener remove
emitter.removeListener("greet", greet);

// Event trigger
emitter.emit("greet");

/*
*****----->Yaad rakhne wali baat------->****

.on() = Listener lagana

.removeListener() = Listener hatana

.emit() = Event chalana

*/






/* 

---->pratice 2 sachin date 03/11/2026 <-----

const EventEmitter = require("events");
const emitter = new EventEmitter();

const welcome = () => {
    console.log("Welcome Sachin!");
};

emitter.on("welcome", welcome);

// Yahan listener remove karna hai

emitter.emit("welcome");
*/

 