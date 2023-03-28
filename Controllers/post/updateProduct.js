const fs =require("fs")
const db_manager = require("../../services/db/mysql/connection")
module.exports= (req,res)=>{
    if(req.body.newImage != req.body.img){
            fs.unlink("./upload/productsImages/"+req.body.img, (err)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log("updating ")
                }
            })
    }

  db_manager.query(`
       update products set name="${req.body.name}", img ="${req.body.newImage}",
         des = "${req.body.des}" , price = ${req.body.price} , stock = ${req.body.stock}
         where id= ${req.body.id};
  `,(err,result)=>{
    if(err){
        console.log(err)
    }else{
        console.log(req.body.id , req.body.name)
        res.json({
            status:true
        })
        console.log(result)
    }
  })
}