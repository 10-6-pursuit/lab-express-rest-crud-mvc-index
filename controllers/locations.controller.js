const express = require('express')
const locationsController = express.Router()
const locationModel = require('../models/location.model')

locationsController.get('/', (req, res) => {
  res.json(locationModel)
})

module.exports = locationsController