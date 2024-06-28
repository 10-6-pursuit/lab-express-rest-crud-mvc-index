const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

const locationController = require("./controllers/locations.controller.js");
app.use("/locations", locationController);

const machineController = require("./controllers/machines.controller.js");
app.use("/machines", machineController);

module.exports = app;