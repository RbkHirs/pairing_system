var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var express = require('express');
var db = require('./db/db.js');
var app = express();
var path = require('path');

// allow cross origin requests
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next()
});

// attach some middleware
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', require('./db/router'));

// handle outside routes requests
app.get('*', (req, res) => {
  res.sendFile(path.resolve(path.join(__dirname, '/../client/dist/index.html')));
});

app.listen(port, function () {
  console.log('listening on port ' + port + '!')
});
