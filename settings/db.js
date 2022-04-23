

const mysql = require('mysql')

const connection = mysql.createConnection({
    connectionLimit: 5,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'torf',
    port: 3306
})

connection.connect((error) => {
    if(error) {
        return console.log('error database')
    } else {
        return console.log('connected is true')
    }
})

module.exports = connection