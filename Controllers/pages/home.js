module.exports=(req, res) => {
    if(req.session.flag == undefined){
        req.session.flag=false
    }  

    console.log(req.session.flag)
        res.render("./home.ejs", { name: `${req.session.name}`,status:req.session.flag })
}