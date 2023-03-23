 const writeUser =require("../../db/writeData")
const bcrypt =require("bcrypt")
module.exports=(req, res) => {
        req.body.password = bcrypt.hashSync(req.body.password, 13)
        req.body.id=Date.now()
        req.body.cart=[]
        req.session._id=req.body.id
        writeUser(req.body)
        req.session.flag=false;
       res.json({
         status:true
       })
    
}
