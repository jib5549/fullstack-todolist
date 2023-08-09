const Todo = require('../../models/todo')

module.exports = {
    create,
    indexComplete,
    indexNotComplete,
    show,
    update,
    destroy,
    jsonTodos,
    jsonTodo
}

// jsonTodos, jsonTodo = view controllers(just printing out whatever data you have)

function jsonTodo (_, res) { // '_' to replace the req because we are not using it
    res.json(res.locals.data.todo) // 
}

function jsonTodos (_, res) {
    res.json(res.locals.data.todos)
}

// *********************** C - CREATE ****************** //
async function create(req, res, next) {
    try {
        const todo = await Todo.create(req.body) //
        console.log(todo)
        res.locals.data.todo = todo 
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

// *********************** R - READ ****************** //

async function indexComplete(req, res, next) {
    try {
        const todos = await Todo.find({ completed: true}) // find todos that "completed" is true
        res.locals.data.todos = todos
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

async function indexNotComplete(req, res, next) {
    try {
        const todos = await Todo.find({ completed: false}) // find todos that are "not completed"
        res.locals.data.todos = todos
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

async function show(req, res, next) {
    try {
        const todo = await Todo.findById(req.params.id)
        res.locals.data.todo = todo
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

// *********************** U - UPDATE ****************** //

async function update(req, res, next) {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.locals.data.todo = todo
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

// *********************** D - DELETE ****************** //

async function destroy(req, res, next) {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id)
        res.locals.data.todo = todo
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}