const fs = require("fs")
const db_manager = require("../connection")
module.exports = (id, collback) => {
   console.log('the id is ', id)
   let query = ""
   if (id == "file")
      query = `  select * from  products;;   `
   else query = `  select * from  products where id= ${id};  `

   db_manager.query( query,
      (err, res) => {
         if (err)
            console.log(err)
         else {
           if(id=="file"){
            collback(res)
           
           }else{
            console.log(res)
            collback(res[0])
         
           }
         }
      })
}