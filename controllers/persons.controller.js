// DEPENDENCIES
const express = require("express");

const persons = express.Router();
const personsArray = require("../models/person.model.js");



// ROUTES
persons.get("/", (req, res) => {
    res.json(personsArray);
  });
  
  module.exports = persons;