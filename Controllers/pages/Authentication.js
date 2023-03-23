module.exports=(req, res) => {
    console.log("hitting   ")
    if (req.session.flag == true) {
        res.redirect("/")
    } else {
        res.render("./sign.ejs")
    }
}