const EventEmitter = require("events");
const emitter = new EventEmitter();

console.log("User Login System Starting .");

let status = false;
emitter.on("userLogin", (username) => {
    if (status === false) {
        console.log("unlocked account");
        
    } else {
        console.log("locked account.");
        
        return;
    }
    const time = new Date();
    console.log("Welcome : ",username);
    console.log(time.toDateString());

    
})
// emitter.emit("userLogin", "sachin");


let count = 0;
emitter.on("userLoginFailed", (username) => {
   
    if (count < 3) {
        count += 1;
        if (count === 3) {
            status = true;
        }
        

    } else {
        console.log("Account Locked");
        return;
    }
    console.log(count);
    
    console.log("Login Failed! Invalid username or password.");
    console.log(username);
    
    
})
emitter.emit("userLoginFailed", "rahul");
emitter.emit("userLoginFailed", "rahul");
emitter.emit("userLoginFailed", "rahul");


emitter.emit("userLogin", "sachin");

/*  

Tumne is project mein kya implement kiya?
1. EventEmitter se custom events.
2. Successful login listener.
3. Failed login listener.
4. Login timestamp.
5. Failed attempts counter.
6. Maximum 3 failed attempts.
7. Boolean account status.
8. Dono listeners ke beech shared variable.
9. return se callback execution stop karna.

*/ 