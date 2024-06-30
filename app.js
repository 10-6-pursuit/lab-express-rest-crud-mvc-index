const express = require('express')

const app = express()

const locationsController = require('./controllers/locations.controller')
const personsController = require('./controllers/persons.controller')
const plansController = require('./controllers/plans.controller')
const machinesController = require('./controllers/machines.controller')
const eventsController = require('./controllers/special-events.controller')

app.use('/locations', locationsController)
app.use('/persons', personsController)
app.use('/plans', plansController)
app.use('/machines', machinesController)
app.use('/events', eventsController)

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

module.exports = app