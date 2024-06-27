// Dependencies
const express = require("express");
const locations = express.Router();
const locationsArray = require("../models/location.model.js");
const personsArray = require("../models/person.model.js");

const bonusArray = locationsArray.map((address) => {
    const sameZipPerson = []
    for(let person of personsArray) {
        if (address.zip === person.mainLocation) {
            sameZipPerson.push(person)
        }
    } 
    return {...address, "people":[...sameZipPerson]}
})


// Index
locations.get("/", (req, res) => {
    res.json(locationsArray);
  });

// Bonus Route

locations.get("/people", (req, res) => {
    res.json(bonusArray);
})

// Export
module.exports = locations;