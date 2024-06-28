const express = require("express");
const locations = express.Router();
const locationArray = require("../models/location.model.js");


locations.get("/", (req, res) => {
    res.json(locationArray);
})
locations.get("/people", (req, res) => {
    const people = locationArray.map(location => location.people);
    res.json(people);
})


module.exports = locations;