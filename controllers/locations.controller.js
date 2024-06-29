const express = require("express");
const locations = express.Router();
const locationsArray = require("../models/location.model.js");

locations.get("/", (req, res) => {
    res.json(locationsArray);
});

locations.get("/people", (req, res) => {
    const people = locationsArray.map(location => location.people);
    res.json(people);
})

module.exports = locations;