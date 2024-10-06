const express = require("express")
const app = express()
const port = 3000
const hostname = "127.0.0.1"
const todoRoutes = require("./routes/todo");
const demoRoutes = require("./routes/demo");

app.use(express.json())
app.use("/demo", demoRoutes);
app.use("/todo", todoRoutes);

//  Listen to incoming requests;
app.listen(port, hostname, () => {
    console.log(`Server running on http://${hostname}:${port}`)
});

/**
 * List of Routes:
 * 
 * http://localhost:3000/demo/
 * http://localhost:3000/todo/
 */