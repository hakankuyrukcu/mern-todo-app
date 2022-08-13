const express = require('express');
const todoRoutes = express.Router();
let Todo = require('../model/todo.model');

todoRoutes.route('/').get(function (req, res) {
  Todo.find(function (err, todos) {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});

todoRoutes.route('/:id').get(function (req, res) {
  let id = req.params.id;
  Todo.findById(id, function (err, todo) {
    res.json(todo);
  });
});

todoRoutes.route('/add').post(function (req, res) {
  let todo = new Todo(req.body);
  todo
    .save()
    .then((todo) => {
      res.status(200).json({ todo: 'todo added successfully' });
    })
    .catch((err) => {
      res.status(400).send('adding new todo failed');
    });
});

todoRoutes.route('/update/:id').post(function (req, res) {
  Todo.findById(req.params.id, function (err, todo) {
    if (!todo) {
      res.status(404).send('data is not found');
      return;
    } else {
      todo.description = req.body.description;
      todo.responsible = req.body.responsible;
      todo.priority = req.body.priority;
      todo.completed = req.body.completed;
    }

    todo
      .save()
      .then((todo) => {
        res.json('Todo updated!');
      })
      .catch((err) => {
        res.status(400).send('Update not possible');
      });
  });
});

todoRoutes.route('/delete/:id').post(function (req, res) {
  Todo.findById(req.params.id, function (err, todo) {
    if (!todo) {
      res.status(404).send('data is not found');
      return;
    }

    todo
      .delete()
      .then((todo) => {
        res.json('Todo removed!');
      })
      .catch((err) => {
        res.status(400).send('Delete not possible');
      });
  });
});

module.exports = todoRoutes;
