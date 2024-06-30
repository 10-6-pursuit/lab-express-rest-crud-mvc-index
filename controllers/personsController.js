const express = require('express');
const router = express.Router();
const personsArray = require('../models/person');

router.get('/', (req, res) => {
    res.status(200).send(personsArray);
})

module.exports = router;