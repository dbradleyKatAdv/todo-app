const express = require('express')

const todoController = require('../controllers/todo-controller.js')

const router = express.Router()
router.post('/', todoController.createItem)
router.get('/', todoController.getTodos)

module.exports = router