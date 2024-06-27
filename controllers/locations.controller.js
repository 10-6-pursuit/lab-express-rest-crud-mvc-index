const express = require("express");
const router = express.Router();
const locations = require("../models/location.model");
const persons = require("../models/person.model");

router.get("/locations", (req, res) => {
  res.json(locations);
});

router.get("/locations/people", (req, res) => {
  const result = locations.map((location) => {
    const peopleAtLocation = persons.filter(
      (person) => person.mainLocation === location.zip
    );
    return { ...location, people: peopleAtLocation };
  });
  res.json(result);
});

module.exports = router;
