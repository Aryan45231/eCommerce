const db_manager = require("../connection")

module.exports=(user_data)=>{
    user_data.cart.img="apple";
    const cart=JSON.stringify(user_data.cart)
     
    console.log("the cart in string is ",  cart)
    db_manager.query(`
        
       update USERS  set  cart = '${cart}' where id = "${user_data.id}";
    
    `,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log("added on cart")
        }
    })
}