const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// locations
const locationsController = require('./controllers/locationsController');
app.use('/locations', locationsController);

// machines
const machinesController = require('./controllers/machinesController');
app.use('/machines', machinesController);

// persons
const personsController = require('./controllers/personsController');
app.use('/persons', personsController);

// plans
const plansController = require('./controllers/plansController');
app.use('/plans', plansController);

// special events
const specialEventsController = require("./controllers/specialEventsController")
app.use("/specialevents", specialEventsController)

module.exports = app;
