const express = require("express")
const app = express()

app.get("/", (req, res) => {
   res.send("Lab-express-rest-crud-mvc")
})

module.exports = app