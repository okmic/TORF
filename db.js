'use strict'

const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'rest',
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