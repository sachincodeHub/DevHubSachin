const fs = require("fs");
const http = require("http");

const port = 3000;

const App = http.createServer((req, res) => {

    if (req.method === "GET" && req.url === "/") {
        fs.readFile("public/index.html", "utf-8", (err, data) => {
            if (err) {
                res.end("File not found");
                return;
            } else {
                res.setHeader("Content-Type", "text/html");
                res.end(data)
            }
        })
    }
    else if (req.method === "GET" && req.url === "/about.html") {
        fs.readFile("public/about.html", "utf-8", (err, data) => {
            if (err) {
                res.end("File not found");
                return;
            } else {
                res.setHeader("Content-Type", "text/html");
                res.end(data)
            }
        })
    }
    else if (req.method === "GET" && req.url === "/contact.html") {
        fs.readFile("public/contact.html", "utf-8", (err, data) => {
            if (err) {
                res.end("File not found");
                return;
            } else {
                res.setHeader("Content-Type", "text/html");
                res.end(data)
            }
        })
    }
    else if (req.method === "GET" && req.url === "/style.css") {
        fs.readFile("public/style.css", "utf-8", (err, data) => {
            if (err) {
                res.end("File not found");
                return;
            } else {
                res.setHeader("Content-Type", "text/css");
                res.end(data)
            }
        })
    }
    else {
        res.end("page not found .")
    }


});

App.listen(port, () => {
    console.log(`http://localhost:${port}`);
})






