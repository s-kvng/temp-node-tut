const http = require("http");

//Using event emitter API
const server = http.createServer();

//emits request event
//subcribe to it / listen for it / respond to it
server.on("request", (req, res) => {
  console.log("welcome");
  res.end("welcome");
});

server.listen(5000);
