const express = require('express');
const router = express.Router();
const plansArray = require('../models/plan');

router.get('/', (req, res) => {
  res.status(200).send(plansArray);
});

module.exports = router;
