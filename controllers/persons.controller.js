const express = require("express");
const persons = express.Router();
const personsArray = require("../models/person.model");

persons.get("/", (request, response) => {
    response.json(personsArray);
});

module.exports = persons;