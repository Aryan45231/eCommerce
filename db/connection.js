const mysql=require("mysql")
const db_manager = mysql.createPool({
    host:"localhost",  
    user:"root",
    password:"Aryan@16&xyz@29",
    database:"shopping_application",
    connectionLimit:10
   
})

module.exports=db_manager