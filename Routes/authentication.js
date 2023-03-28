const express = require("express")
const app = express.Router()
// routes for client pages
const Authentication = require("../Controllers/pages/Authentication")
app.get("/signin", Authentication)
app.get("/forgetPassword", (req, res) => { res.render("./forget.ejs") })
app.get("/changePassword/:email/:_id", (req, res) => { res.render("./resetPassword.ejs") })

// routes for get fetch request by client
const logout = require("../Controllers/get/logout")
const sendEmail = require("../Controllers/get/sendEmail")
const verifyOtp = require("../Controllers/get/verifyOtp")
app.get("/email/:_email/:task", sendEmail)
app.get("/verifyOtp/:otp", verifyOtp)
app.get("/logout", logout)

// routes for post requests
const changePassword = require("../Controllers/post/changePassword")
const signin = require("../Controllers/post/signin")
const signup = require("../Controllers/post/signup")
app.post("/sing_up", signup)
app.post("/sign-in", signin)
app.post("/changePassword/:email/:_id", changePassword)


module.exports = app;



