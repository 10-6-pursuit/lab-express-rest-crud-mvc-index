const express = require("express")
const app = express()
const machinesController = require("./controllers/machines.controller");
const locationsController = require("./controllers/locations.controller")
const personsController = require("./controllers/persons.controller");
const plansController = require("./controllers/plans.controller");
const eventsController = require("./controllers/special-events.controller");

app.get("/",(req,res) =>{
    res.send("Hello, world!");
})

app.use("/machines", machinesController);

app.use("/locations", locationsController);

app.use("/persons", personsController);

app.use("/plans", plansController);

app.use("/special-events", eventsController);

app.use("*", (req,res) => {
    res.status(404).json({error:"Page not found"})
})

module.exports = app