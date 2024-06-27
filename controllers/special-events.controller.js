const express = require("express");
const specialevents = express.Router();
const specialeventsArray = require("../models/special-event.model");


specialevents.get("/", (x, y) => {
    y.json(specialeventsArray);
});

module.exports = specialevents;