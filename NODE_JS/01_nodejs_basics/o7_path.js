/*
Lesson: Node.js Path Module
path Node.js ka built-in module hai. Iska use files aur folders ke paths handle karne ke liye hota hai.

*/


/* 

const path = require("path");
console.log(path.basename("folder/demo_02.txt"));
console.log(path.extname("folder/demo_02.txt"));
console.log(path.dirname("folder/demo_02.txt"));
demo_02.txt
    .txt
folder

*/

/* join() path sara combine krta hai path parts ko*/ 
const path = require("path");
const myPath = path.join("uploads", "profile", "user.jpg");
console.log(myPath);



/* 
Next: path.resolve()
Ye method ek absolute path generate karta hai.
 */

const result = path.resolve("uploads", "profile", "user.jpg");
console.log(result);

/* 
Next topic: path.parse()

Ye kisi path ko alag-alag parts mein divide karta hai.

*/
const results = path.parse("uploads/profile/user.jpg");

console.log(results.name);
console.log(results.ext);
console.log(results.base);


/*
 format() 
 path.format() → alag-alag parts ko jodkar path banata hai.

*/
const resultS = path.format({
    dir: "public/images",
    name: "logo",
    ext: ".png"
});

console.log(resultS);

/* complte tpoic name 

Ab ek important revision

Method	Kaam

basename()	-----------> Last component

dirname()	---------> Parent directory

extname()	--------> Extension

join()	--------> Paths combine

resolve()	-------> Absolute path

parse()	------> Path ko parts mein todna

format()------>	Parts se path banana


*/


/* check the path absulte hai ya nhi so 
topic name is :---- isAbsolute(path)
*/



console.log(path.isAbsolute("C:\\Users\\Sachin\\demo.txt"));
console.log(path.isAbsolute("uploads/demo.txt"));
/* q practice */ 
console.log(path.isAbsolute("C:\\Users\\Sachin\\Desktop"));
console.log(path.isAbsolute("./uploads/profile"));
console.log(path.isAbsolute("/home/user/file.txt"));