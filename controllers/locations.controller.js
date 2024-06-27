const express = require("express")
const locationsData = require("../models/location.model")
const locations = express.Router()

locations.get("/", (req, res) => {
  res.json(locationsData)
})