const express = require("express")
const app = express.Router()
app.use(express.static(__dirname + "/public"))
// home page product  get services
const details = require("../Controllers/get/details")
const products = require("../Controllers/get/products")
app.get("/products/:counter", products)
app.get("/details/:_id", details)

// cart page 
const showcart = require("../Controllers/pages/showcart")
const verify = require("../utils/verify")
app.get("/showcart/:_id", verify, showcart)

// cart  get fetch servie
const cart = require("../Controllers/get/cart")
app.get("/cart/:_id/:task", cart)

module.exports = app;