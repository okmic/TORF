

const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'torf',
    port: 3306
})

connection.connect((error) => {
    if(error) {
        return () => {
            connection.connect()
            console.log(error)
        }
    } else {
        return console.log('connected is true')
    }
})

module.exports = connection