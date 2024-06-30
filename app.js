const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const locationsController = require('./controllers/locationsController');
app.use('/locations', locationsController);

module.exports = app;
