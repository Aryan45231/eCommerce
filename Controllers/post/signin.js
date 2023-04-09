require("dotenv").config({path :"../../.env"})
const bcrypt =require("bcrypt")
const readUser=require("../../services/db/mysql/users/getUserData")
const  jwt= require("jsonwebtoken")
module.exports=(req, res) => {
    readUser(req.body.email,(obj)=>{
        if(obj!=undefined){
            console.log(obj)
            if (req.body.type == obj.type) {
                const userData = {
                    status: true,
                    name: obj.name,
                    id:obj.id,
                    token:"",
                    type:obj.type
                }
                if (bcrypt.compareSync(req.body.password, obj.password)) {
                    req.session.name = obj.name
                    req.session.flag = true
                    console.log("the sessin is cahge isnto" ,req.session.flag)
                    req.session.type = obj.type
                    req.session._id = obj.id
                    console.log("the id for session is " , req.session._id)
                    if(obj.type=="admin"){
                        userData.token= jwt.sign( JSON.stringify(obj), process.env.adminTokenSecret)
                    }
                    else if(obj.type=="seller"){
                         userData.token =jwt.sign(JSON.stringify(obj), process.env.sellerTokenSecret )
                    }
                    res.json(userData)
                } else {
                    res.json({
                        status: false,
                        message: "invalid email or password"
                    })
                }
            } else {
                res.json({
                    status: false,
                    message: " Invalid email or password"
                })
            }
        }else {
            res.json({
                status: false,
                message: "email not registered"
              
            })
        }
    })
}