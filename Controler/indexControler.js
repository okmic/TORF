'use strict'


const path = require('path')
const fs = require('fs').promises
const logsPath = path.resolve(__dirname, './../data', 'data.txt')
const db = require('./../settings/db.js')
const response = require('./../response.js')

exports.index =  (req, res) => {
    try{
        const text = `Температура: ${req.body[0]}, Влажность: ${req.body[1]}, Дата: ${req.body[2]}`
        console.log(req.body)
        fs.appendFile(logsPath, `${text}\r\n`)
        response.status(req.body, res)
    } catch (e) {
        console.log(e)
    }
}

exports.all = (req, res) => {
     db.query('SELECT * FROM `data`', (error, rows, fields) => {
        if (error) {
            console.log('error')
         } else {
            response.status(rows, res)
         }
    })
}

exports.send = (req, res) => {
    db.query("INSERT INTO `data` (`id`, `temperature`, `humidity`, `date`) VALUES " + `(NULL, ${req.body[0]}, ${req.body[1]}, CURRENT_TIMESTAMP)`, (error, rows, fields) => {
       if (error) {
           console.log('error')
        } else {
           response.status('ok', res)
           console.log('ok')
        }
   })
}