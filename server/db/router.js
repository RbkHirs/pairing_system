var pairingRouter = require('express').Router()
var studentController = require('./StudentController.js')
var GroupsController = require('./GroupsController.js')
var collectionsController = require('./CollectionsController.js')

// student routes
pairingRouter.route('/student').post(studentController.createOne)
pairingRouter.route('/student').get(studentController.retrieve)
pairingRouter.route('/update').put(studentController.updateOne)


// groups routes
pairingRouter.route('/groups').post(GroupsController.CreateOne)
pairingRouter.route('/groups').get(GroupsController.RetrieveAll)
pairingRouter.route('/groups/:uid').get(GroupsController.RetrieveOne)

// collections routes
pairingRouter.route('/collections').post(collectionsController.CreateOne)
pairingRouter.route('/collections').get(collectionsController.RetrieveAll)
pairingRouter.route('/collections/:group').get(collectionsController.RetrieveOne)


module.exports = pairingRouter
