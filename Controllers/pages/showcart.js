const readUser=require("../../services/db/mysql/users/getUserData")
module.exports=(req,res)=>{
  const user_id=req.params._id
    readUser(user_id,(user)=>{
      console.log("form showcart")
     console.log(user)
       if(user!=undefined){
      if(JSON.parse(user.cart)==null){
         const cartData=[]
         res.render("./cart.ejs",{cartData})
      }else{
        const cartData=JSON.parse(user.cart)
        res.render("./cart.ejs",{cartData})
      }
       
       }else{
          res.send("404 page not found")
       }
    })
}