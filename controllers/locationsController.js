const express = require('express');
const router = express.Router();
const locationArray = require('../models/location');

router.get("/", (req, res) => {
    res.status(200).send(locationArray)
})

module.exports = router;