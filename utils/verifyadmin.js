require("../.env")
const jwt =require("jsonwebtoken")
module.exports=(req,res,next)=>{
   if(req.session.flag==true){
    const token=req.params.token
    jwt.verify(token, process.env.adminTokenSecret,(err,decode)=>{
        if(err){
            console.log(process.env.adminTokenSecret)
            res.json({
                err:err,
                status:false
            })
        }else{
            console.log("admin verified")
            next()
            
        }
    })
   }else{
     res.redirect("/")
   }
}