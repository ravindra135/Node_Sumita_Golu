// Creating Server - Using HTTP;
const http = require("http");

// server instance
const server = http.createServer((req, res) => {
  // Create Server accepts a callback function which is executed every time a request is made to the server.
  // req - request object
  // res - response object

  /**
   * For example When Code Executes; This particular function creates a book like which defines available routes and their responses.
   * When a request is made to the server, the server checks the requested URL and sends the appropriate response.
   */

  // Dynamic Routing;
  var route = req.url;
  switch (route) {
    case "/":
      res.end("Node Web Server is running");
      break;
    case "/one":
      res.end("Route: One");
      break;
    case "/two":
      res.end("Route: Two");
      break;
    default:
      res.end("Error: 404 - Route Not Found");
  }
});

const port = 3000;
const hostname = "127.0.0.1";

server.listen(port, hostname, () => {
  console.log("Server is Running on Port: " + hostname + ":" + port);
});
