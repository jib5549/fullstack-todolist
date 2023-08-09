const express = require('express')
const router = express.Router()
const todoCtrl = require('../../controllers/api/todos')

// Index - incomplete
router.get('/', todoCtrl.indexNotComplete, todoCtrl.jsonTodos) // because we have the next()
// Index - completed
router.get('/completed', todoCtrl.indexComplete, todoCtrl.jsonTodo)
// Delete
router.delete('/:id', todoCtrl.destroy, todoCtrl.jsonTodo)
// router.delete('/:id', todoCtrl.destroy, (req, res) => )
// Update
router.put('/:id', todoCtrl.update, todoCtrl.jsonTodo)
// create
router.post('/', todoCtrl.create, todoCtrl.jsonTodo)
// Show
router.get('/:id', todoCtrl.show, todoCtrl.jsonTodo)

module.exports = router