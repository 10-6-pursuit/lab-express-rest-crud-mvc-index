const express = require("express");
const eventsController = express.Router();
const eventModel = require("../models/special-event.model");

eventsController.get("/", (req, res)=>{
    res.json(eventModel)
})

module.exports = eventsController;