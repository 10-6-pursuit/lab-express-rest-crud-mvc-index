// Dependencies
const express = require("express");
const persons = express.Router();
const personsArray = require("../models/person.model.js");

// Index
persons.get("/", (req, res) => {
    res.json(personsArray);
  });

// Export
module.exports = persons;