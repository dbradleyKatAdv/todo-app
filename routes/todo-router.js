const express = require('express')

const todoController = require('../controllers/todo-controller.js')

const router = express.Router()
router.post('/', todoController.createItem)
router.get('/', todoController.getTodos)
router.delete('/:id', todoController.deleteTodo)

module.exports = router