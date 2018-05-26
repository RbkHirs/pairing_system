var mongoose = require('mongoose')

var CollectionsSchema = new mongoose.Schema({
  group: {type: mongoose.Schema.Types.ObjectId, ref: 'Groups'},
  Pairs: [{
    firstStudent: {
      type: mongoose.Schema.Types.ObjectId, ref: 'Student',
    },
    secondStudent: {
      type: mongoose.Schema.Types.ObjectId, ref: 'Student',
    },
  }]
})

var Collections = mongoose.model('Collections', CollectionsSchema)

module.exports = Collections
