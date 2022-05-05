var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose
  .connect('mongodb://localhost:27017/todo-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MONGO CONNECTION OPEN!!!');
  })
  .catch((err) => {
    console.log('OH NO MONGO CONNECTION ERROR!!!');
    console.log(err);
  });

mongoose.Promise = Promise;

module.exports.Todo = require('./todo');
