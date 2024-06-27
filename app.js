// Dependencies
const express = require("express");

// Configuration
const app = express();

// Health Check Route
app.get("/", (req, res) => {
    res.send("Hello, world!")
})

// Export
module.exports = app;