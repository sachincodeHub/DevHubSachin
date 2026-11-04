/* 

Step 1: HTTP module import karna :---->

Definition: http Node.js ka built-in module hai. Iska use HTTP server create karne aur client ki requests handle karne ke liye hota hai.

Example: Jab browser mein http://localhost:3000 open karte ho, toh Node.js HTTP server browser ki request receive kar sakta hai.


*/

/*

Step 2: HTTP Server kya hota hai?

Definition: HTTP Server ek program hota hai jo client ki HTTP request receive karta hai aur response bhejta hai.

Example: Browser mein http://localhost:3000 open karoge, toh tumhara Node.js server request receive karega.

*/

/*

Step 3: Server ko start karna

Definition: .listen() method server ko ek port par incoming requests sunne ke liye start karta hai.

Example: Port 3000 par server start hone ke baad browser mein localhost:3000 open kar sakte ho.

Ek important concept:----->

Definition – Server Object: http.createServer() ek server object return karta hai. Isi object par .listen() method call karte hain.

Example: Jaise bike start karne ke liye ignition on karte hain, waise hi server start karne ke liye .listen() use karte hain.

*/

/*

1. Port kya hota hai?
Definition: Port ek number hota hai jiske through server incoming network connections receive karta hai.

Example: Hum apne Node.js server ke liye port 3000 choose kar sakte hain.

process.3000 likhne ki zarurat nahi hai. Port ko ek normal number ki tarah variable mein rakh sakte ho.

*/

/*
2. createServer() kya karta hai?
Definition: Ye HTTP server create karta hai aur callback function leta hai.

Is callback mein:
- req = client ki request.
- res = server ka response.

*/
/*  

Definition: .listen(port, callback) server ko diye gaye port par start karta hai. Callback server start hone ke baad execute hota hai.

*/

/*

Ab next practical: res.end():---->

Definition: res.end() server ki taraf se client ko response bhejkar response complete karta hai.

Example: Browser mein Hello World display karna.

Tumhara task: Browser mein "Hello Sachin! Welcome to Node.js" display karna hai.

*/

/*

Ab next practical: res.end()
Definition: res.end() server ki taraf se client ko response bhejkar response complete karta hai.

*/

/*

Ek important concept:---->

1. req.url kya hai?
===>

Definition: req.url batata hai ki browser ne server ke kis path par request bheji hai.

Example:

Agar browser mein ye open karte ho:--

- http://localhost:3000/ → req.url ki value / hogi.
- http://localhost:3000/about → value /about hogi.
- http://localh

req.url — Definition: Ye batata hai ki client ne server ke kis URL path par request bheji hai.

Example:
- / → Home route
- /about → About route
- /contact → Contact route

*/

/*
2. req.method kya hai?
====>

Definition: req.method batata hai ki client server ko kis type ki HTTP request bhej raha hai.

Common -->methods:
Method	--->Meaning
GET---->	Data lena
POST	-----> Data bhejna
PUT----> 	Data update karna
DELETE  ----->	Data delete karna

*/

/*
3. Dono mein difference

- req.url = Kahan request aayi?
- req.method = Kis type ki request aayi?

*/
/*
Yaad rakho:--->

- req = Browser se server ki taraf.
- res = Server se browser ki taraf.

*/

/*

req aur res ka practical use :---->

- req.url — kaunsa path request hua?
- req.method — kaunsi HTTP method use hui?
- res.end() — browser ko response bhejna aur response complete karna.

*/

/*

1. req.url
Definition: Request kis URL path par aayi hai, woh batata hai.

Ye ek property hai, function nahi.
2. req.method
Definition: Request ka HTTP method batata hai, jaise GET, POST.

Ye bhi ek property hai,

*/
/* practice of res.url,res.method():---
code hai ok :--->

const http = require("http");

const port = 3000;

const App = http.createServer((req, res) => {

    console.log("URL:", req.url);
    console.log("Method:", req.method);
    res.end("end request ")
});

 App.listen(port, () => {
    console.log(`http://localhost:${port}`);
})
*/

const http = require("http");

const port = 3000;

const App = http.createServer((req, res) => {

    if (req.method === "GET" && req.url === "/") {
        res.end("home")
    }
    else if (req.method === "GET"&&req.url === "/about"){
        res.end("about page")
    }
   
     else {
        res.end("page not found .")
    }

    
});

App.listen(port, () => {
    console.log(`http://localhost:${port}`);
})






