// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello World");
});


const locationsController = require("./controllers/locations.controller.js");
app.use("/locations", locationsController);


const machinesController = require("./controllers/locations.controller.js");
app.use("/machines", machinesController);


const personsController = require("./controllers/persons.controller.js");
app.use("/persons", personsController);

const plansController = require("./controllers/plans.controller.js");
app.use("/plans", plansController);

const specialeventsController = require("./controllers/special-events.controller.js");
app.use("/special-events", specialeventsController);


// EXPORT
module.exports = app;