module.exports= (req, res) => {
    req.session.flag = false;
    req.session.destroy()
    res.redirect("/")
}