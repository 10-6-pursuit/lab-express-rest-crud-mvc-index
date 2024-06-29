const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, world!");
});

const locationController = require("./controllers/locations.controller.js");
app.use("/locations", locationController);

const machineController = require("./controllers/machines.controller.js");
app.use("/machines", machineController);

const personsController = require("./controllers/persons.controller.js");
app.use("/persons", personsController);

const plansController = require("./controllers/plans.controller.js");
app.use("/plans", plansController);

const specialEventsController = require("./controllers/special-events.controller.js");
app.use("/special-events", specialEventsController);

module.exports = app;