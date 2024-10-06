// Create a Express Server;
const express = require("express")
const app = express()
const port = 3000
const hostname = "127.0.0.1"

// Middleware to parse JSON request body;
// app.use(express.json())

// Routes to handle incoming requests;

app.get('/', (req, res) => {
    res.send('Hello World!')
});

// How to use middleware to parse JSON request body for single route;
// Need to send the middleware as the second argument to the route handler function;
app.post('/', express.json(), (req, res) => {
    console.log(req.body);
    res.send('Got a POST request');
});

app.delete('/', (req, res) => {
    res.send('Got a DELETE request')
});


//  Listen to incoming requests;
app.listen(port, hostname, () => {
    console.log(`Server running on http://${hostname}:${port}`)
});