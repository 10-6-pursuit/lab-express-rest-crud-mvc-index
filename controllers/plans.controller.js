const express = require('express')
const plansController = express.Router()
const planModel = require('../models/plan.model')

plansController.get('/', (req, res) => {
  res.json(planModel)
})

module.exports = plansController