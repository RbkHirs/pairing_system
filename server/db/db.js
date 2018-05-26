var mongoose = require('mongoose');
var mongoURI = 'mongodb://admin:admin@ds129770.mlab.com:29770/paring';
// var mongoURI = mongoose.connect('mongodb://localhost/pairing-system');

mongoose.connect(mongoURI)
var db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('we are connected')
})

module.exports = db
