const readUser=require("../../db/getUserData")
module.exports=(req,res)=>{
  const user_id=req.params._id
  console.log( "the user id is " ,user_id)
    readUser(user_id,(user)=>{
       if(user!=undefined){
        const cartData=user.cart
        console.log("user data is", cartData)
         res.render("./cart.ejs",{cartData})
       }else{
          res.send("404 page not found")
       }
    })
}