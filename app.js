const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("HELLO BEAUTIFUL");
});

const locationsController = require("./controllers/locations.controller");
app.use("/locations", locationsController);

module.exports = app;