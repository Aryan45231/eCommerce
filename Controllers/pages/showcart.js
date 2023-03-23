const readUser=require("../../db/getUserData")
module.exports=(req,res)=>{
  const user_id=req.params._id
    readUser(user_id,(user)=>{
      console.log("form showcart")
     console.log(user)
       if(user!=undefined){
        const cartData=JSON.parse(user.cart)
         res.render("./cart.ejs",{cartData})
       }else{
          res.send("404 page not found")
       }
    })
}