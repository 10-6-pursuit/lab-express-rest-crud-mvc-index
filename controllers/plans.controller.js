// DEPENDENCIESconst express = require("express");
const express = require("express");

const plans = express.Router();
const plansArray = require("../models/plan.model.js");



// ROUTES
plans.get("/", (req, res) => {
    res.json(plansArray);
  });
  
  module.exports = plans;