const http = require("http");
const fs = require("fs");

const server = http.createServer((request, res) => {
  if (request.url === "/") {
    res.end("Hello");
  } else if (request.url === "/data") {
    fs.readFile("./text.txt", "utf-8", (err, data) => {
      if (err) {
        res.write("no data \n");
        res.end(err);
      }
        else
      {
         res.end(data);
      }
    });
    
  } else {
    res.end("invalid end point");
  }
});

server.listen("5690", () => {
  console.log("listen on the port 5690");
});
