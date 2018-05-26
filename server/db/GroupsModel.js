var mongoose = require('mongoose')

var GroupsSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  GroupSize: {
    type: Number
  },
  CreatedAt: { type: Date, default: Date.now },
  cohort: {
    type: String,
  }
})

var Groups = mongoose.model('Groups', GroupsSchema)

module.exports = Groups
