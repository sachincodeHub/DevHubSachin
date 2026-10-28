// Tuple — fixed positions par specific types

let users: [string, number];
users = [" sachin kumar ", 1];
console.log(users);


let student_information: [String, Number, Boolean];
student_information = ["sachin kumar", 23, true];
console.log(student_information);

/* 
Lesson 3: Union Types — bahut important 🔥
let value: string | number;
*/
let student: string | Number;
student = "sachin kumar";
student = 23;
console.log(student);


