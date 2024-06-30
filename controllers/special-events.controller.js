// DEPENDENCIESconst express = require("express");
const express = require("express");

const specialevents= express.Router();
const specialeventsArray = require("../models/special-event.model.js");



// ROUTES
specialevents.get("/", (req, res) => {
    res.json(specialeventsArray);
  });
  
  module.exports = specialevents;