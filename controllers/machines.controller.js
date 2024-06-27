const express = require("express");
const machines = express.Router();
const machinesArray = require("../models/machine.model");

machines.get("/", (x , y) => {
    response.json(machinesArray);
});

module.exports = locations;
