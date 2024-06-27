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

module.exports = app;