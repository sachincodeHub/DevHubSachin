/* return resolve by promise:---

const my_Promise = new Promise((resolve, reject) => {
    resolve("task completed")
});
my_Promise.then((result) => {
    console.log(result);
    
})
*/

/* return resolve by promise:---

const promise = new Promise((resolve, reject) => {
    reject("something went wrong")
})
promise.catch((error) => {
    console.log(error);
    
})

*/

/* promise changing:------>

const promise = new Promise((resolve, reject) => {
    resolve(10)
})
promise.then((data) => {
    return data+5;
})
 .then((data) => {
    return data * 2;
    
})
.then((data) => {
    console.log(data);
    
})


*/


/* async funtion and await:------>

async function calculate() {
    const data = await Promise.resolve(20);
    const add = data + 10;
    console.log(add);
    
    
}
calculate();


*/

async function getUser() {
    try {
        const data = await Promise.resolve("Pradeep")
        console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }

}

getUser();
