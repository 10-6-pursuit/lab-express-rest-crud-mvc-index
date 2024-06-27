const express = require("express");
const people = express.Router();
const peopleData = require("../models/person.model");


people.get("/", (req, res) => {
	res.json(peopleData);
});

module.exports = people