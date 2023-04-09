const jwt =require("jsonwebtoken")
module.exports=(req,res)=>{
    const token=req.params.token
    jwt.verify(token, process.env.sellerTokenSecret,(err,decode)=>{
        if(err){
            res.json({
                err:err,
                status:false
            })
        }else{
            next()
        }
    })
}