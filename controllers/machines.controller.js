const express = require('express');
const router = express.Router();
const machineArray = require('../models/machine.model');

router.get("/", (req, res) => {
    res.status(200).send(machineArray)
})

module.exports = router;