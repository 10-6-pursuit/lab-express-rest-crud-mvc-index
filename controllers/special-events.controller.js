// Dependencies
const express = require("express");
const specialEvents = express.Router();
const specialEventsArray = require("../models/special-event.model.js");

// Index
specialEvents.get("/", (req, res) => {
    res.json(specialEventsArray);
  });

// Export
module.exports = specialEvents;