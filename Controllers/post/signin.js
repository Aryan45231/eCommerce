const fs=require("fs")
const bcrypt =require("bcrypt")
const readUser=require("../../db/getUserData")
const  jwt= require("jsonwebtoken")
module.exports=(req, res) => {
    readUser(req.body.email,(obj)=>{
        console.log(req.body)
        console.log(obj)
            if (obj!=undefined) {
                const userData = {
                    status: true,
                    name: obj.name,
                    id:obj.id
                }
                if (bcrypt.compareSync(req.body.password, obj.password)) {
                    req.session.name = obj.name
                    req.session.flag = true
                    req.session._id=obj.id
                    userData.token= jwt.sign({
                        id:obj.id
                    },"abcaa22")
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
                    message: "email not registered"
                })
            }
    })
}