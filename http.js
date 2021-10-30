const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hemepage");
    // res.end();
  }
  if (req.url === "/about") {
    res.write("about");
    // res.end();
  }

  res.end("oops ");
});

server.listen(5000);
