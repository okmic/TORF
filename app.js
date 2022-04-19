const express = require('express')
/* const path = require('path') */

const app = express()

const cors = require('cors');

app.use(cors({
  origin: '*'
}))

app.use(express.json({extended: true}))

app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT ?? 5000

/* const logsPath = path.resolve(__dirname, 'data', 'data.txt') */

/* app.post('/', async (req, res) => {
  const text = `Температура: ${req.body[0]}, Влажность: ${req.body[1]}, Дата: ${req.body[2]}`
  console.log(req.body)
  await fs.appendFile(logsPath, `${text}\r\n`)
})

const db = require('./db.js')

app.get('/test', async (req, res) => {
  db.query('SELECT * FROM `users`', (error, rows, fields) => {
    if (error) {
        console.log('error')
     } else {
      respooon.status(rows, res)
     }
})
}) */

const routes = require('./settings/routes.js')
routes(app)


app.listen(port, () => console.log(`Server listening on port ${port}`))