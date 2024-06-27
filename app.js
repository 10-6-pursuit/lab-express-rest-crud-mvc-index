const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello, world!");
});

const locationsController = require("./controllers/locations.controller");
app.use("/locations", locationsController);

const personsController = require("./controllers/persons.controller");
app.use("/persons", personsController);

const plansController = require("./controllers/plans.controller");
app.use("/plans", plansController);

const machinesController = require("./controllers/machines.controller");
app.use("/machines", machinesController);

const specialEventsController = require("./controllers/special-events.controller");
app.use("/special-events", specialEventsController);

app.get("/:whatever", (req, res) => {
    res.status(404).send("404 Sorry, page not found!")
});

module.exports = app;