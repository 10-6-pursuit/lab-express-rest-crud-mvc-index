//Dependencies
const express = require("express");
const locationsController = require("./controllers/locations.controller");
const personsController = require("./controllers/persons.controller");
const machinesController = require("./controllers/machines.controller");
const plansController = require("./controllers/plans.controller");
const specialeventsController = require("./controllers/special-events.controller");


//Configuration
const app = express();

//Routes
app.get("/", (request, response) => {  //homepage is not pulling from anywhere
    response.send("Hello, world!");
});

app.use("/locations", locationsController);
app.use("/persons", personsController);
app.use("/machines", machinesController);
app.use("/plans", plansController);
app.use("/special-events", specialeventsController);

app.get("*", (request, response) => {
    response.json({error: "Sorry, no page found!"});
});



//Export
module.exports = app;