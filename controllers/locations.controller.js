const express = require('express');
const router = express.Router();
const locationArray = require('../models/location.model');

router.get("/", (req, res) => {
    res.status(200).send(locationArray)
})

module.exports = router;