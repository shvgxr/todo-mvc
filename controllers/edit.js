const Todo = require('../models/Todo');

module.exports = {
    getEditTodo: (req,res)=> {
        const id = req.params.id;
        Todo.find({}, (err,tasks) => {
            res.render("edit.ejs", {todo: tasks,idTask: id})
        })
    },
    postEdit: (req,res) => {
        const id = req.params.id;
        Todo.findByIdAndUpdate(
            id,
            {
                todo: req.body.todo
            },
            err => {
                if (err) return res.status(500).send(err);
                console.log('Todo has been edited')
                res.redirect("/todo")
            }
        )
    }
}