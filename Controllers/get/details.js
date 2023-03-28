const readProduct=require("../../services/db/mysql/products/getProductData")
module.exports = (req, res) => {
    readProduct(req.params._id, (data) => {
    
            res.json(data)  
    })
}
