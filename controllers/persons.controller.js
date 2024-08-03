const express = require('express')
const personsController = express.Router()
const personModel = require('../models/person.model')

personsController.get('/', (req, res) => {
  res.json(personModel)
})

module.exports = personsController