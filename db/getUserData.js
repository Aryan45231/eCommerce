const db_manager = require("./connection")
module.exports =  (check,collback) => {
   console.log(check)
   db_manager.query(
      `
         SELECT *
          FROM USERS
          WHERE email ="${check}" or id="${check}";
     `,(err,result)=>{
        if(err){
         console.log(err)
        }else{
            console.log(result)
           collback(result[0])
        }
     }
   )
}  