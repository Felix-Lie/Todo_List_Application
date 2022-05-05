var express = require('express'),
  app = express();

app.get('/', function (req, res) {
  res.send('Hi There from Express!!!');
});

app.get('/happy', function (req, res) {
  res.send(':)');
});

app.listen(3000, function () {
  console.log('APP IS RUNNING ON PORT 3000');
});
