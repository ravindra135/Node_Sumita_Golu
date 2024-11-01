const db = require('../utils/db');

module.exports = {
    getAllTodos: function(req, res) {
        const query = `SELECT * FROM todo_lists`;
        db.query(query, (err, results) => {
            if(err) {
                console.log(err.message);
                res.status(500).json({
                    status: "fail",
                    message: "Error getting all Todo"
                });
                return;
            }

            res.json({
                status: "success",
                data: results
            });
            return;
        });
    },

    addTodo: function (req, res) {
        const { title, description } = req.body;

        const query = `INSERT INTO todo_lists (title, description) VALUES (?, ?)`;
        try {
            db.query(query, [title, description], (err, results) => {
                if (err) {
                    console.log(err.message);
                    res.status(500).json({
                        status: "fail",
                        message: "Error adding Todo"
                    });
                    return;
                }
    
                // Successful insertion response
                res.status(200).json({
                    status: "success",
                    message: "Todo added successfully",
                    data: {
                        id: results.insertId, // Return the inserted record's ID
                        title: title,
                        description: description
                    }
                });
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                status: "fail",
                message: "Error adding Todo"
            });
        }
    },
    
    getTodo: function (req, res) {
        const id = req.params.id;
        const query = `SELECT * FROM todo_lists WHERE id = ?`;
        db.query(query, [id], (err, results) => {
            if(err) {
                console.log(err.message);
                res.status(500).json({
                    status: "fail",
                    message: "Error getting Todo"
                });
                return;
            }

            res.json({
                status: "success",
                data: results[0]
            })
            return;
        });
    },

    updateTodo: function (req,res)  {
        const id = req.params.id;
        const { status } = req.body;
        const query = `UPDATE todo_lists SET status = ? WHERE id = ?`;
        db.query(query, [status, id], (err, results) => {
            if(err) {
                console.log(err.message);
                res.status(500).json({
                    status: "fail",
                    message: "Error updating Todo"
                });
                return;
            }

            if(results.affectedRows > 0) {
                res.json({
                    status: "success",
                    message: "Todo updated successfully"
                });
            } else {
                res.status(404).json({
                    status: "fail",
                    message: "Todo not found"
                });
            }
            return;
            
        });
    },

    deleteTodo: function (req,res)  {
        const id = req.params.id;
        const query = `DELETE FROM todo_lists WHERE id = ?`;
        db.query(query, [id], (err, results) => {
            if(err) {
                console.log(err.message);
                res.status(500).json({
                    status: "fail",
                    message: "Error deleting Todo"
                });
                return;
            }
            if(results.affectedRows > 0) {
                res.json({
                    status: "success",
                    message: "Todo deleted successfully"
                });
            } else {
                res.status(404).json({
                    status: "fail",
                    message: "Todo not found"
                });
            }
            return;
        });
    },

    promiseTesting: (req, res) => {
        // What is a promise in javascript?
        // A promise is an object that represents a value that may not be available yet, but will be in the future.
        // It is used to handle asynchronous operations in a more organized and predictable way.
        // A promise can be in one of three states:
        // 1. Pending: The initial state, before the value is available or an error has occurred.
        // 2. Fulfilled: The state of a promise that contains a value.
        // 3. Rejected: The state of a promise that contains an error.

        // Promises can be created using the Promise constructor or the new Promise() syntax.
        // The Promise constructor takes a function as an argument, which is called the executor.
        // The executor function is called immediately when the promise is created, and it should return a function that takes two arguments:
        // resolve and reject. The resolve function is used to resolve the promise with a value, and the reject function is used to reject the promise with an error.

        // Here's an example of a promise that resolves after 2 seconds:

        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Hello, world!");
            }, 2000);
        });

        // We can use the then() method to handle the value of the promise when it is fulfilled:

        myPromise.then((value) => {
            console.log(value); // Output: "Hello, world!"
        });

        // We can also use the catch() method to handle the error of the promise:

        myPromise.catch((error) => {
            console.log(error); // Output: "Error: Something went wrong"
        });

        // We can also use the finally() method to handle the final state of the promise, whether it is fulfilled or rejected:

        myPromise.finally(() => {
            console.log("Promise is done!");
        });

        // In this example, the promise is created and then() is used to handle the value when it is fulfilled.
        // If the promise is rejected, the catch() method is used to handle the error. Finally(), is used to handle the final state of the promise.
    },

    promiseErrors: (req, res) => {
        // Create & Handle Promise Errors
        // Promises can be rejected with an error using the reject() function.

        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error("Something went wrong"));
            }, 2000);
        });

        myPromise.then((value) => {
            console.log(value); // This will not be executed
        }).catch((error) => {
            console.log(error.message); // Output: "Something went wrong"
        });

        // In this example, the promise is created and then() is used to handle the value when it is fulfilled.
        // If the promise is rejected, the catch() method is used to handle the error. Finally(), is used to handle the final state of the promise. Note that the error is an instance of the Error object.
    },
    
    promiseChaining: (req, res) => {
        // Promise Chaining
        // Promises can be chained together using the then() method.
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Hello, world!");
            }, 2000);
        });

        myPromise.then((value) => {
            console.log(value); // Output: "Hello, world!"
            return "Goodbye, world!";
        }).then((value) => {
            console.log(value); // Output: "Goodbye, world!"
        });

        // In this example, the promise is created and then() is used to handle the value when it is fulfilled.
        // The then() method can return a new value, which can be handled by another then() method. Finally(), is used to handle the final state of the promise.

        // Note that the value returned by the first then() method is passed as an argument to the second then() method.
    },

    // Pandas Task Create a function that takes a list of numbers as an argument and returns a promise that resolves with the sum of the numbers.
    // The function should reject with an error if the list is empty or contains non-numeric values.
    promiseImplement: (req, res) => {
        // Your Code Here.....
    },

    exampleTesting: (req,res) => {
        const v = req.body.value;
        const resPromise = () => {
            return new Promise((resolve,reject) => {

                if(v > 10) {
                    setTimeout(() => {
                        console.log("Promise Resolved");
                        resolve(v);
                    }, 5000);
                } else {
                    reject(new Error('Value should be greater than 10'))
                }

                
            });
        }

        resPromise()
            .then((value) => {
                let value1 = value * 2;
                return value1;
            })
            .then((value1) => {
                let value2 = value1 * 3;
                return value2;
            })
            .then((value2) => {
                res.status(200).json({
                    status: "success",
                    value: value2
                });
                return;
            })
            .catch(error => {
                res.status(500).json({
                    status: "fail",
                    message: "Error getting data " + error.message
                });
                return;
            });
    }
}