const express = require("express");
const machinesData = require("../models/machine.model");
const machines = express.Router();

machines.get("/", (req, res) => {
	res.json(machinesData);
});

module.exports = machines;
