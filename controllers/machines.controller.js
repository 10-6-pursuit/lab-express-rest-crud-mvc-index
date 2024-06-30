// DEPENDENCIESconst express = require("express");
const express = require("express");

const machines = express.Router();
const machinesArray = require("../models/machine.model.js");



// ROUTES
machines.get("/", (req, res) => {
    res.json(machinesArray);
  });
  
  module.exports = machines;