var express = require('express'),
  app = express();

var todoRoutes = require('./routes/todos');

app.get('/', function (req, res) {
  res.send('HELLO FROM THE ROOT ROUTE');
});

app.use('/api/todos', todoRoutes);

app.listen(3000, function () {
  console.log('APP IS RUNNING ON PORT 3000');
});
