const express = require("express");
const app = express();
const locationsController = require("./controllers/locations.controller");
app.use("/locations", locationsController);

const machinesController = require("./controllers/machines.controller");
app.use("/equipment", machinesController);

// const personsController = require("./controllers/persons.controller");
// app.use("/people", personsController);

// const plansController = require("./controllers/plans.controller");
// app.use("/plans", plansController);

// const specialEventsController = require("./controllers/special-events.controller");
// app.use("/special-events", specialEventsController);

app.get("/", (req, res) => {
	res.send("Lab-express-rest-crud-mvc");
});

app.get("*", (req, res) => {
	res.status(404).json({ msg: "Sorry, no page found!" });
});

module.exports = app;
