const express = require('express')
const locationsController = express.Router()
const locationModel = require('../models/location.model')

locationsController.get('/', (req, res) => {
  res.json(locationModel)
})

locationsController.get('/people', (req, res) => {
  const personModel = require('../models/person.model')
  const locationsWithPeople = locationModel.map(location => {
    location.members = personModel.filter(person => (
      person.mainLocation === location.zip
    ))
  })
  res.json(locationModel)
})

module.exports = locationsController