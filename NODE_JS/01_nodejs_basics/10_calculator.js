const num1 = Number(process.argv[2]);
const operator = process.argv[3];
const num2 = Number(process.argv[4]);

let result;

if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
}  else if (operator === "/") {
    if (num2 === 0) {
        console.log("Cannot divide by zero");
        process.exit(1);
        /*
        Exit Code	Meaning
        
        0	--->Success
       1	-----> Failure / Error

        */ 
    }

    result = num1 / num2;
} else {
    console.log("Invalid operator");
    process.exit();
}

console.log("Result:", result);
/* run krne ka tarika bhai
node 10_calculator.js 20 + 10
node 10_calculator.js 20 "*" 5
*/ 