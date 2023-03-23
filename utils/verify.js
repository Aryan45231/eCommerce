const jwt=require("jsonwebtoken")
module.exports=(req,res,next)=>{
    if(req.session.flag==true)
    next()
    else
    res.redirect("/")
}