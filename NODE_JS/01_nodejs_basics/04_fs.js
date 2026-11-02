// crud opertion file krna
// create file 

const fs = require("fs");
fs.writeFileSync("demo.txt", "this is my fisrt file writeSync");

// read file
const data=
    fs.readFileSync("demo.txt", "utf-8");
console.log(data);

//  update file 

const update_data=
    fs.appendFileSync("demo.txt","this is update file .");
   console.log(update_data);

/*  delete file 

fs.unlinkSync("demo.txt");

*/

/* exiting file */  
const checkfile = fs.existsSync("demo.txt");
console.log(checkfile);


