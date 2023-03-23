const readProduct=require("../../db/getProductData")
module.exports = (req, res) => {
    readProduct(req.params._id, (data) => {
    
            res.json(data)  
    })
}
