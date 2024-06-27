// Dependencies
const express = require("express");

// Configuration
const app = express();

// Health Check Route
app.get("/", (req, res) => {
    res.send("Hello, world!")
})

const locationsController = require("./controllers/locations.controller.js");
const equipmentController = require("./controllers/machines.controller.js");
const peopleController = require("./controllers/persons.controller.js");
const plansController = require("./controllers/plans.controller.js");
const specialEventsController = require("./controllers/special-events.controller.js");

app.use("/locations", locationsController);
app.use("/machines", equipmentController);
app.use("/persons", peopleController);
app.use("/plans", plansController);
app.use("/special-events", specialEventsController);

// 404 Page not found
app.get("*", (req, res) => {
    res.status(404).json({ error: "Sorry, no page found" });
  });

// Export
module.exports = app;