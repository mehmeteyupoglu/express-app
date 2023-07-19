const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("This is the about page");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(`
      <h1>Oops!</h1>
      <p>We can't seem to find the path you're looking for!</p>
      <a href="/">back home</a>
    `);
  }
});

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
