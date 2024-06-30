const express = require('express');
const router = express.Router();
const specialEventsArray = require('../models/special-event.model');

router.get('/', (req, res) => {
  res.status(200).send(specialEventsArray);
});

module.exports = router;
