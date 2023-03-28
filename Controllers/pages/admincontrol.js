const getProductData = require("../../services/db/mysql/products/getProductData")

module.exports=(req,res)=>{
    getProductData("file",(productData)=>{
    
        res.render("./adminControl.ejs" ,{productData})

    })
}