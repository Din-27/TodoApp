const express = require('express')
const router = express.Router()
const { 
    getTodos, 
    getTodo, 
    addTodo, 
    updateTodo, 
    deleteTodo 
} = require('../controllers/Todo')

router.get('/todos', getTodos)
router.get('/todo/:id', getTodo)
router.post('/todo', addTodo)
router.patch('/todo/:id', updateTodo)
router.delete('/todo/:id', deleteTodo)

module.exports = router