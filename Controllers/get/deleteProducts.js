const db_manager = require("../../services/db/mysql/connection")
const  fs =require("fs")
const getProductData = require("../../services/db/mysql/products/getProductData")

module.exports=(req, res)=>{
   getProductData(req.params._id ,(productobj)=>{
    console.log(productobj)
    fs.unlink( "./upload/productsImages/"+productobj.img, (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log("deleted")
        }
    })
    db_manager.query(`
    delete  from products where id= ${req.params._id};
   `,(err, result)=>{
       if(err){
           console.log(err)
       }else{
           console.log("data deleted ", result)

       }
   })
   res.json({
    status:true
   })
   })
}