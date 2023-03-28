const fs = require("fs")
const db_manager = require("../connection")
const read = require("./getUserData")
const write = (obj) => {
    let query = ""
    db_manager.query(`select * from USERS where id=${obj.id}`, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            if (result.length == 0) {
                query = `
              insert into USERS (id , name , email , password) values(
                "${obj.id}",
                 "${obj.name}" ,
                 "${obj.email}",
                  "${obj.password}"
              );
`
                db_manager.query(query, (err, result) => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log("data added")
                    }
                })

            } else {
                query = `  UPDATE USERS SET password = "${obj.password}" where id= ${obj.id};  `
                db_manager.query(query, (err, result) => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log("data added")
                    }
                })
            }
        }
    })

    console.log(query)


}

module.exports = write