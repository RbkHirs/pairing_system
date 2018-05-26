var port = process.env.PORT || 3000
var bodyParser = require('body-parser')
var express = require('express')
var db = require('./db/db.js')
var app = express()
var path = require('path');

app.use(function (req, res, next) {
  // Allow the client's you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true)
  // Pass to next layer of middleware
  next()
})

app.use(express.static(__dirname + '/../client/dist'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', require('./db/router'))

// return for any out side route the template
app.get('*', (req, res) => {
 res.sendFile(path.resolve(path.join(__dirname, '/../client/dist/index.html')));
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!')
})
