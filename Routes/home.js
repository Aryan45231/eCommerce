const express = require("express")
const app = express.Router()
// Route for Home page
const home = require("../Controllers/pages/home")
app.get("/", home)

module.exports = app
