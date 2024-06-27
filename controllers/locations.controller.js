// Dependencies
const express = require("express");
const locations = express.Router();
const locationsArray = require("../models/location.model.js");

// Index
locations.get("/", (req, res) => {
    res.json(locationsArray);
  });

// Export
module.exports = locations;