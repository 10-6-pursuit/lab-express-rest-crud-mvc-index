const express = require('express');
const router = express.Router();
const specialEventsArray = require('../models/specialEvent');

router.get('/', (req, res) => {
  res.status(200).send(specialEventsArray);
});

module.exports = router;
