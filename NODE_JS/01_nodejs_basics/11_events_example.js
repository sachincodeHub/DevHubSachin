const EventEmmiter = require("events");
const emmit = new EventEmmiter();
emmit.on("userDetails", (name, age, city) => {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("City:", city);
    
});
emmit.emit("userDetails","sachin kumar",23,"hyderabad")
