const http = require("http"); // 1 - Import Node.js core module

const users = [
  { name: "moe", age: 40 },
  { name: "larry", age: 50 },
  { name: "curly", age: 60 },
];

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<p> This is Home page </p>");
    res.end();
  } else if (req.url == "/data") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(users));
    res.end();
  }
});

server.listen(5000); //3 - listen for any incoming requests

console.log("Node.js web server at port 5000 is running..");
