const readUser= require("../../services/db/mysql/users/getUserData")
const writeUser= require("../../services/db/mysql/users/writeuserdata")
const bcrypt= require("bcrypt")
module.exports=(req,res)=>{
    if(req.session.ChangePassword==true){
    console.log(req.body)
    readUser(req.params._id,(user)=>{
        console.log(req.body)
        user.password=bcrypt.hashSync(req.body.password, 13)
        writeUser(user)
        res.json({
            status:true
        })
    })
}else{
    res.redirect("/")
}
} 