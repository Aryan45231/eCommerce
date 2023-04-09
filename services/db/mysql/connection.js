const mysql = require("mysql")
const fs = require("fs")
const db_manager = mysql.createPool({
    host: "database-1.cqbjqbcan2zg.ap-south-1.rds.amazonaws.com",
    port: "3306",
    user: "admin",
    password: "aryan1623",
    database: "shopping_application"
})
// const db_manager = mysql.createPool({
//     host:"localhost",
//     user:"root",
//     password:"Aryan@16&xyz@29",
//     database:"shopping_application",
//     connectionLimit:10
// })
db_manager.query(" select * from USERS ;",(err,result)=>{
    if(err){
        console.log(err)
    }else{
        console.log(result)
    }
})

db_manager.getConnection((err) => {
    if (err) {
        console.log("the error is \n", err)
    } else {
        console.log("connected successfull")
    }
})

module.exports = db_manager