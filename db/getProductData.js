const fs = require("fs")
const db_manager = require("./connection")
module.exports = (id, collback) => {
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
            console.log(res)
           }else{
            collback(res[0])
            console.log(res)
           }
         }
      })
}