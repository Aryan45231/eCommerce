const db_manager = require("../../services/db/mysql/connection")
const readProuct =require("../../services/db/mysql/products/getProductData")
module.exports=(req,res)=>{
    const id=req.params._id
    const task=req.params.task
    if(task=="read"){
        console.log(id)
        readProuct(id,(product)=>{
             console.log(product)
                res.json(product)
        })
    }
    if( task=="write"){
        db_manager.query(`
            update product , name="${req.body.name}", img="${req.body.img}",
            des = "${req.body.des}", price= ${req.body.price} ,stock =${req.body.stock} where id= ${req.body.id}
        `,(err,result)=>{
            if(err){
                console.log(err)
            }else{
                console.log("data updated")
            }
        })
    }
}