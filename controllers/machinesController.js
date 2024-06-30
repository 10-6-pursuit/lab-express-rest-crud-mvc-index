const express = require('express');
const router = express.Router();
const machineArray = require('../models/machine');

router.get("/", (req, res) => {
    res.status(200).send(machineArray)
})

module.exports = router;