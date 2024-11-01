const express = require('express');
const router = express.Router();
const todoController = require('../controller/TodoController');

router.get('/', todoController.getAllTodos);
router.post('/add', todoController.addTodo);
router.get('/get/:id', todoController.getTodo);
router.patch('/update/:id', todoController.updateTodo);  
router.delete('/delete/:id', todoController.deleteTodo);

// Example of using, Async and Await & Promises;

module.exports = router;