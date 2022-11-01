const http = require("http");
const fs = require("fs");
const url = require("url");
// console.log("🚀 ~ file: file_system.js ~ line 4 ~ url", url);

const users = [
  { name: "moe", age: 40 },
  { name: "larry", age: 50 },
  { name: "curly", age: 60 },
];

const server = http.createServer((req, res) => {
  fs.writeFile("url_data.json", JSON.stringify(users), (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    }
    res.end("successful");
  });
});

server.listen(5000);
