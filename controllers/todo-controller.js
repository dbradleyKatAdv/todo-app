const Todo = require('../models/todo-model');

createTodo = (req, res) => {
    const body = req.body;

    if(!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a todo'
        })
    }

    const todo = new Todo(body);

    if(!todo) {
        return res.status(400).json({success: false, error: err});
    }

    todo.save().then(() => {
        return res.status(201).json({
            success: true,
            id: todo._id,
            message: 'Todo created!',
        })
    }).catch(err => {
        return res.status(400).json({
            err,
            message: 'Todo not created!'
        })
    })
}

updateTodo = async(req, res) => {
    const body = req.body;

    if(!body){
        return res.status(400).json({
            success: false,
            error: 'You must provide the updated body.'
        })
    }

    Todo.findOne({ _id: req.params.id}, (err, todo) => {
        if(err) {
            return res.status(404).json({
                err, 
                message: 'Todo not found',
            })
        }

        todo.name = body.name
        todo.date = body.date
        todo.note = body.note

        todo.save().then(() => {
            return res.status(200).json({
                success: true,
                id: todo._id,
                message: 'Todo Updated!'
            })
        }).catch((err) => {
            return res.status(404).json({
                err,
                message: 'Todo not Updated!',
            })
        })
    })
}

deleteTodo = async (req, res) => {
    await Todo.findOneAndDelete({ _id: req.params.id}, (err, todo) => {
        if(err) {
            return res.status(400).json({ success: false, error: err})
        }

        if(!todo) {
            return res.status(404).json({success: false, error: 'Todo not found'})
        }

        return res.status(200).json({success: true, data: todo})
    }).catch(err => console.log(err));
}

getTodoById = async (req, res) => {
    await Todo.findOne({ _id: req.params.id}, (err, todo) => {
        if(err) {
            return res.status(400).json({success: false, error: err})
        }

        if(!todo) {
            return res
                .status(404)
                .json({ success: false, error: `Todo not found` })
        }
        return res.status(200).json({success: true, data: todo});
    }).catch(err => console.log(err));
}

getTodo = async (req, res) => {
    await Todo.find({}, (err, todo) => {
        if(err) {
            return res.status(400).json({ success: false, error: err});
        }

        if(!todo.length) {
            return res
                .status(404)
                .json({ success: false, error: `Todo not found` })
        }

        return res.status(200).json({success: true, data: todo})
    }).catch(err => console.log(err));
}

module.exports = {
    createTodo,
    updateTodo,
    deleteTodo, 
    getTodo,
    getTodoById,
}