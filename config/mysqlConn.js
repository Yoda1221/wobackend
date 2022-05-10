const mysql = require('mysql')
const dotenv = require('dotenv').config()

const mysqlConn = mysql.createConnection({
    host : even.process.DB_HOST,
    user : even.process.DB_USER,
    password : even.process.DB_PASSWORD,
    database : even.process.DATABASE,
    port : even.process.DB_PORT
})

mysqlConn.connect( err => {
    if (err) {
        console.log('DB CONNECT ERROR: ' + err)
        mysqlConn.end()
        return
    }
    console.log(`CONNECTED TO BD ID: ${mysqlConn.threadId}`)
})

module.exports = mysqlConn