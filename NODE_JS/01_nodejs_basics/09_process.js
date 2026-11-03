/*
Step 1: Process module samjho
process Node.js ka built-in global object hai. Isko use karne ke liye require() karne ki zaroorat nahi hoti.
*/
/*
concept one :------> proceeess module ka 
console.log("Node Version:", process.version);

console.log("Platform:", process.platform);

console.log("Architecture:", process.arch);

console.log("Current Directory:", process.cwd());
*/

const name = process.argv[2];
const age = Number(process.argv[3]);

console.log("My name is", name);
console.log("My age is", age);
console.log(typeof age);

/* iska path kha pr hai so */ 
console.log("Node Path:", process.argv[0]);
console.log("File Path:", process.argv[1]);
console.log("Name:", process.argv[2]);
console.log("Age:", process.argv[3]);

/* sara padna sachin*/
/*
is code ka output


Current Directory: C:\Users\PRADEEP KUMAR YADAV\OneDrive\Desktop\MERN\NODE_JS\01_nodejs_basics
File Path: C:\Users\PRADEEP KUMAR YADAV\OneDrive\Desktop\MERN\NODE_JS\01_nodejs_basics\09_process.js
PS C:\Users\PRADEEP KUMAR YADAV\OneDrive\Desktop\MERN\NODE_JS\01_nodejs_basics> 
*/ 
console.log("Current Directory:", process.cwd());
console.log("File Path:", process.argv[1]);


/*
complete the toipic of 

Concept	Use :---> Process module complete

process.version--->Node.js version
process.platform----->	Operating system
process.arch----->	System architecture
process.cwd()	------> Current working directory
process.argv	------> Terminal arguments
process.env	-----> Environment variables
process.exit()-------> 	Program stop karna
process.exit(0)	-------> Successful exit
process.exit(1) ------>	Failure exit

*/ 