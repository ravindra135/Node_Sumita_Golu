// Using Express Package
const express = require("express");
const app = express();
const fs = require("fs");

const port = 3000;
const hostname = "localhost";

// routes;
app.get("/", (req, res) => {
  res.send("Welcome to Node Express Server");
});

app.get("/one", (req, res) => {
  res.send("Route One");
});

app.get("/two", (req, res) => {
  res.send("Route Two");
});

// reading files;
app.get("/read-files", (req, res) => {
  fs.readFile("./files/data.txt", "utf-8", (err, data) => {
    res.send(data);
  });
});

// app or express server instance
app.listen(port, hostname, () => {
  console.info("Node Express Server Started on Port: " + hostname + ":" + port);
});
