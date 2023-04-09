const jwt=require("jsonwebtoken")
module.exports=(req,res,next)=>{

    if(req.session.flag==true){
        console.log("verified")
        next()
    }
  
    else
    res.redirect("/")
}