// DEPENDENCIESconst 
const express = require("express");

const locations = express.Router();
const locationsArray = require("../models/location.model.js");



// ROUTES
locations.get("/", (req, res) => {
    res.json(locationsArray);
  });
  
  module.exports = locations;