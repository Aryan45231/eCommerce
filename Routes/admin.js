const express = require("express")
const app = express.Router()
const multer = require("multer")
const upload = multer({ dest: "../upload//productsImages" })

// admin Control  page
const admincontrol = require("../Controllers/pages/admincontrol")
app.get("/adminControl", admincontrol)

// admin get fetch request from client
const deleteProducts = require("../Controllers/get/deleteProducts")
const updateproduct = require("../Controllers/get/updateproduct")
app.get("/updateproduct/:_id/:task", updateproduct)
app.get("/deleteProduct/:_id", deleteProducts)

// admin post routes
const add_product = require("../Controllers/post/add_product")
const updateProduct = require("../Controllers/post/updateProduct")
app.post("/addproduct", add_product)
app.post("/updateProduct", updateProduct)
app.post("/AddProductImage", upload.single("productimage"), (req, res) => { res.json(req.file) })

module.exports = app