const express = require('express')
const machinesController = express.Router()
const machineModel = require('../models/machine.model')

machinesController.get('/', (req, res) => {
  res.json(machineModel)
})

module.exports = machinesController