import mysql from "mysql"

// export const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root1234",
//   database: "blog",
// })
export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root1234",
  database: "blog",
})

function handleDisconnect() {
  db.connect(function (err, connection) {
    if (err) {
      console.log("error when connecting to db:", err)
      setTimeout(handleDisconnect, 2000)
    }
  })

  db.on("error", function (err) {
    console.log("db error", err)
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleDisconnect()
    } else {
      throw err
    }
  })
}

// handleDisconnect()
