const express = require("express");
const router = express.Router();
const persons = require("../models/person.model");

router.get("/persons", (req, res) => {
  res.json(persons);
});

module.exports = router;
