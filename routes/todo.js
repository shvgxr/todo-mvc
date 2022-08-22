const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todo')
const editRoutes = require("./edit")

router.get('/', todoController.getTodo)

router.use('/edit', editRoutes)

router.post('/createTodo', todoController.createTodo)

router.put('/markComplete', todoController.markComplete)

router.put('/markIncomplete', todoController.markIncomplete)

router.delete('/deleteTodo', todoController.deleteTodo)

module.exports = router