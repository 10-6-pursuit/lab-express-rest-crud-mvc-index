// Dependencies
const express = require("express");
const people = express.Router();
const peopleArray = require("../models/person.model.js");

// Index
people.get("/", (req, res) => {
    res.json(peopleArray);
  });

// Export
module.exports = people;