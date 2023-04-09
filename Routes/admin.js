const express = require("express")
const app = express.Router()
const multer = require("multer")
const upload = multer({ dest: "./upload//productsImages" })
const verifyadmin = require("../utils/verifyadmin")

// admin Control  page
const admincontrol = require("../Controllers/pages/admincontrol")
app.get("/adminControl/:token", verifyadmin , admincontrol)

// admin get fetch request from client
const deleteProducts = require("../Controllers/get/deleteProducts")
const updateproduct = require("../Controllers/get/updateproduct")
app.get("/updateproduct/:_id/:task/:token",verifyadmin, updateproduct)
app.get("/deleteProduct/:_id/:token", verifyadmin, deleteProducts)

// admin post routes
const add_product = require("../Controllers/post/add_product")
const updateProduct = require("../Controllers/post/updateProduct")
app.post("/addproduct/:token", verifyadmin, add_product)
app.post("/updateProduct/:token", verifyadmin, updateProduct)
app.post("/AddProductImage/:token", upload.single("productimage"),verifyadmin, (req, res) => { res.json(req.file) })

module.exports = app