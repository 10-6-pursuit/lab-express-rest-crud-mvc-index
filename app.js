//Dependencies
const express = require("express");
const locationsController = require("./controllers/locations.controller");
const personsController = require("./controllers/persons.controller");


//Configuration
const app = express();

//Routes
app.get("/", (request, response) => {  //homepage is not pulling from anywhere
    response.send("Hello, world!");
});

app.use("/locations", locationsController);
app.use("/persons", personsController);



//Export
module.exports = app;