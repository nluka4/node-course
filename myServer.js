const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Knja");
  res.end();
});

server.listen(5000);
