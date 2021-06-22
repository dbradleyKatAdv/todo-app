const express = require('express');

const TodoController = require('../controllers/todo-controller.js');

const router = express.Router();

router.post('/todo', TodoController.createTodo);
router.put('/todo/:id', TodoController.updateTodo);
router.delete('/todo/:id', TodoController.deleteTodo);
router.get('/todo/:id', TodoController.getTodoById);
router.get('/todo', TodoController.getTodo);

module.exports = router;