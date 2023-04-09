// CREATE BY ARYAN JAISWAL 
// STARTING 14 MARCH 2023
// E- COMMERCE WEB SITE 

// liberaries
const express = require("express")
const app = express()
const origin = "/"
const port = process.env.PORT || 2000
require("dotenv").config({path:"./.env"})

// Requiring Session 
const session = require("express-session")
app.use(session({ secret: process.env.session_secret }))

// MiddleWare
app.use(origin ,express.static(__dirname + "/public"))
app.use( origin ,express.static(__dirname+"/upload/productsImages"))
app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: "50mb" }))

// Home Page ROutes
const Home = require("./Routes/home")
app.use(origin, Home)

/// Authentication Routes
const Authentication = require("./Routes/authentication")
app.use(origin, Authentication)

// Product and Cart Routes
const ProductAndCart = require("./Routes/productAndCart")
app.use(origin, ProductAndCart)

// Admin Control Routes
const Admin = require("./Routes/admin")
app.use(origin, Admin)

app.listen(port, () => { console.log(` server is at ${port}`) })

