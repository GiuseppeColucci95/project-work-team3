//import function to connect db
const mysql = require('mysql2')

//create connection variable 
const connection = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT
    }
)

// connect on db
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL!')
})

//exports function to connect on db
module.exports = connection;