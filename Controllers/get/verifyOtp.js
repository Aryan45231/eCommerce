module.exports=(req,res)=>{
    if(req.params.otp==req.session.otp){
        console.log("verified")
        res.json({

            status:true
        })
    }else{
        console.log("not verified")
        res.json({
            status:false
        })
    }
}