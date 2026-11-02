const fs = require("fs");
/* file create using async funtion

fs.writeFile("demo_02.txt", "I am learning asynchronous Node.js", (err) => {

    if (err) {
        console.log(err);
        
        return;
    }
    console.log("File created successfully");
    
})
console.log("Program End ");
*/


/*
 readfile data :------> 

 fs.readFile("demo_02.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
        return;

    }
    console.log(data);

}) 



*/

/* 
udpdate the file data using async:--------

fs.appendFile("demo_02.txt", " I am learning Express.js", (err) => {
    if (err) {
        console.log(err);
        return;

    }
    console.log("Success");

}) 
*/

/* delete the data of file and file*/

fs.unlink("demo.txt", (err) => {
    if (err) {
        console.log(err);
        return;
        
    }
    console.log("delete succesfully");
    
})


/* 
complete topic name is :------>

Ab tak tumne fs module ke ye operations khud perform kar liye:
- writeFileSync() – file create/write
- readFileSync() – file read
- appendFileSync() – file update
- unlinkSync() – file delete
- writeFile() – async write
- readFile() – async read
- appendFile() – async append
- unlink() – async delet

*/ 



