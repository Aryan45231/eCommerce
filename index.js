// CREATE BY ARYAN JAISWAL 
// STARTING 14 MARCH 2023
// E- COMMERCE WEB SITE 

// liberaries
const express = require("express")
const app = express()
const port = process.env.PORT || 2000
const session = require("express-session")



// controllers 

// for post
const signup = require("./Controllers/post/signup")
const singin = require("./Controllers/post/signin.js")

// for pages
const home = require("./Controllers/pages/home")
const Authentication = require("./Controllers/pages/Authentication")
const showcart = require("./Controllers/pages/showcart")

// for get fetch services
const products = require("./Controllers/get/products");
const details = require("./Controllers/get/details");
const cart = require("./Controllers/get/cart")
const sendEmail = require("./Controllers/get/sendEmail")
const verifyOtp = require("./Controllers/get/verifyOtp")
const logout = require("./Controllers/get/logout");
const changePassword = require("./Controllers/post/changePassword")
// MiddleWares
const verify = require("./utils/verify");
app.use(express.static(__dirname + "/public"))
app.set('view engine', 'ejs');
app.use(express.json())
app.use(session({ secret: "appAsw23423234J&e23" }))
app.use(express.urlencoded({ extended: true }))

// get Routes
// Routes for hitting pages
app.get("/", home)
app.get("/signin", Authentication)
app.get("/forgetPassword",(req,res)=>{res.render("./forget.ejs")})
app.get("/changePassword/:email/:_id",(req,res)=>{res.render("./resetPassword.ejs")})
app.get("/showcart/:_id", verify, showcart)


// Routes for getting get services
app.get("/cart/:_id/:task", cart)
app.get("/email/:_email/:task", sendEmail)
app.get("/verifyOtp/:otp",verifyOtp)
app.get("/logout", logout)
app.get("/products/:counter", products)
app.get("/details/:_id", details)

// post Routes
app.post("/sing_up", signup)
app.post("/sign-in", singin)
app.post("/changePassword/:email/:_id", changePassword)
// for Products
// to send products to client side
const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`server is at ${port}`)
        })
    } catch (e) {
        console.log(e)
    }
}
start()

