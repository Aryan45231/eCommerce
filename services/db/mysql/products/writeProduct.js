const db_manager = require("../connection");

module.exports=(obj)=>{
    db_manager.query(`
    
     insert into products (name ,img,des, price ,stock) values(   
        "${obj.name}",
        "${obj.img}",
        "${obj.des}",
         ${obj.price},
         ${obj.stock}
     )
    
    `,(err ,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log("data added")
        }
    })
}