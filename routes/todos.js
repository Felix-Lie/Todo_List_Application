var express = require('express');
var router = express.Router();
var helpers = require('../helpers/todos');

router
  .route('/')
  .get(helpers.getTodos) //index route
  .post(helpers.createTodo); //create route

router
  .route('/:todoId')
  .get(helpers.getTodo) //Show Route
  .put(helpers.updateTodo) //Update Route
  .delete(helpers.deleteTodo); //Delete Route

module.exports = router;
