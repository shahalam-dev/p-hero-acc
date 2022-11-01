//============= create server using core node module ==================//

// const http = require("http"); // 1 - Import Node.js core module

// const server = http.createServer(function (req, res) {
//   // 2 - creating server
//   res.end("Hello from custom server");
// });

// server.listen(5000); //3 - listen for any incoming requests

// console.log("Node.js web server at port 5000 is running..");

//=============== use of underscore ==============//
const _ = require("underscore");
const stooges = [
  { name: "moe", age: 40 },
  { name: "larry", age: 50 },
  { name: "curly", age: 60 },
];
const data = _.pluck(stooges, "name");
console.log("🚀 ~ file: index.js ~ line 17 ~ data", data);
