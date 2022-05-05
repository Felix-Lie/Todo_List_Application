var express = require('express'),
  app = express(),
  bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//these two lines allow us to access request body for post req
app.use(express.static(__dirname + '/public'));
//allows to connect with css
app.use(express.static(__dirname + '/views'));
//allows to connect with index.html

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.use('/api/todos', todoRoutes);

app.listen(3000, function () {
  console.log('APP IS RUNNING ON PORT 3000');
});
