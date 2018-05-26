var Collections = require('./collectionsModel')

exports.CreateOne = function (req, res) {

  var stringifyData = JSON.stringify(req.body)
  var groupName = JSON.parse(stringifyData)
  // req.body.title = req.body.title.toLowerCase()
  // var groupName = JSON.parse(JSON.stringify(req.body));
  Collections.create(groupName, function (err, response) {
    if (err) {
      return res.status(500).json(err.message)
    }
    res.status(201).json(response)
  })
}

exports.RetrieveAll = function (req, res) {
  // filter Groups based on this group id
  Collections.find().find(function (err, data) {
    if (err) {
      return res.status(500).json(err.message)
    } else {
      res.status(201).json(data)
    }
  })
}

exports.RetrieveOne = function (req, res) {
  Collections.find({group: req.params.group})
      .populate('Pairs.firstStudent')
      .populate('Pairs.secondStudent')
      .exec(function(err, post) {
          res.status(201).json(post)
      });
}

