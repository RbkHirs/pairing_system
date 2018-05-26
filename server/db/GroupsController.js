var GroupsModel = require('./GroupsModel')

exports.CreateOne = function (req, res) {
  GroupsModel.create(req.body, function (err, response) {
    if (err) {
      return res.status(500).json(err.message)
    }
    res.status(201).json(response)
  })
}

exports.RetrieveAll = function (req, res) {
  // filter Groups based on this group id
  GroupsModel.find().find(function (err, data) {
    if (err) {
      return res.status(500).json(err.message)
    } else {
      res.status(201).json(data)
    }
  })
}

exports.RetrieveOne = function (req, res) {
  // filter Groups based on this group id
  GroupsModel.find({_id: req.params.uid}).find(function (err, data) {
    if (err) {
      return res.status(500).json(err.message)
    } else {
      res.status(201).json(data)
    }
  })
}

