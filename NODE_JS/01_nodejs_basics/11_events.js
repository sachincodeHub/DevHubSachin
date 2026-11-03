/*
Topic 11: Events Module:----> 

events node js :---->

Ismein hum seekhenge:----->

1. Event kya hota hai?===>
     
    Simple language mein, jab koi particular action hota hai, toh use Event kehte hain.

   Real-life examples:

    - Button click karna → Click Event
    - Keyboard press karna → Keypress Event
    - File open hona → File Event
    - Server par request aana → Request Event

2. Event listener kya hota hai?

3. EventEmitter kya hai?==>
    ==>
    Node.js mein EventEmitter ek class hai jo events create, listen aur trigger karne mein help karti hai.
    
4. .on() aur .emit() ka use.
==>
    Method	Kaam
.on()	---> Event ko listen karta hai
.emit()	-----> Event ko trigger karta hai

*/


const EventEmitter = require("events");
/* EventEmitter class ka object create karti hai. Isi object se hum events listen aur trigger karte hain.*/ 
const emitter = new EventEmitter();
/* 
1. emmit.on() mein kya arguments pass karte hain?
Ismein mainly 2 arguments pass karte hain:
emmit.on("eventName", callbackFunction);

-----> First argument: Event ka naam (string).
-----> Second argument: Callback function, jo event trigger hone par execute hota hai.
*/ 
emitter.on("greet", () => {
    console.log("helo Sachin ! Welcome to Node.js");
    
});
emitter.on("bye", () => {
    console.log("Goodbye Sachin!");
});
/* 
emmit.emit() mein kya pass karte hain?
Haan bhai, bilkul sahi! Ismein event ka naam pass karte hain.
emmit.emit("greet");
Iska matlab greet event trigger karo.
*/ 
emitter.emit("greet");
emitter.emit("bye");
/* emmit se humlog data bhi pass kr sakte hai ok 

*/
emitter.on("greets", (quotes) => {
    console.log("Never Ever GiveUp !  "+ quotes);
    
})
emitter.emit("greets", "Sachin");
emitter.emit("greets", "Sachin");
/* once()
emitter.once("greets", (quotes) => {
    console.log("Never Ever GiveUp !  " + quotes);

})
emitter.emit("greets", "Sachin");
emitter.emit("greets", "Sachin");
*/ 


