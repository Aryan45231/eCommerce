const db_manager = require("../../services/db/mysql/connection")
const writeProduct = require("../../services/db/mysql/products/writeProduct")

module.exports= (req, res)=>{
    writeProduct(req.body)
    res.json({
        status:true
    })
}