const Todo = require('../models/todo-model')

createItem = async (req, res) => {
    const body = await req.body;
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an item',
        })
    }

    const todo = new Todo(body)

    if(!todo){
        return res.status(400).json({ success: false, error: err })
    }

    todo.save().then(() => {
        return res.status(200).json({
            success: true,
            note: todo.todo,
            id: todo._id,
            message: 'todo item created',
        })
    })
    .catch(error => {
        return res.status(400).json({
            error,
            message: 'todo item not created',
        })
    })
}

getTodos = async (req, res) => {
    await Todo.find({}, (err, todos) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!todos.length) {
            return res
                .status(404)    
                .json({ success: false, error: `Item not found` })
        }

        return res.status(200).json({ success: true, data: todos })
    }).catch(err => console.log(err))
}

deleteTodo = async (req, res) => {
    const id = req.params.id;
    await Todo.deleteOne(({_id: id}), (err) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: req.message})
    }).catch(err => console.log(err))
}



updateTodo = async (req, res) => {
    const id = req.params.id;
    const updatedTodo = req.body.todo;
    
    await Todo.findById(id, function ( err, todo ){
        if(err) {
            return res.status(400).json({success:false, error:err})
        }
        todo.todo = updatedTodo;
        todo.save(function ( err, todo ){
            if(err) {
                return res.status(400).json({success: false, error: err})
            }
            return res.status(200).json({ success: true, data: req.message});
        });
    });
}

module.exports = {createItem, getTodos, deleteTodo, updateTodo}