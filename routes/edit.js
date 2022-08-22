const express = require('express')
const router = express.Router()
const editController = require('../controllers/edit')

router.get('/:id', editController.getEditTodo)
router.post('/:id', editController.postEdit)
// router.get('/remove/:id', editController.deleteTask)

module.exports = router