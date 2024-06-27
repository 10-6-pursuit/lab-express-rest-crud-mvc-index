// Dependencies
const express = require("express");
const machines = express.Router();
const machinesArray = require("../models/machine.model.js");

// Index
machines.get("/", (req, res) => {
    res.json(machinesArray);
  });

// Export
module.exports = machines;