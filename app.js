const express = require('express')
const path = require('path')
const fs = require('fs').promises

const app = express()

const cors = require('cors');

app.use(cors({
  origin: '*'
}))

app.use(express.json({extended: true}))


app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT ?? 5000

const logsPath = path.resolve(__dirname, 'data', 'data.txt')

app.post('/', async (req, res) => {
  const text = `Температура: ${req.body[0]}, Влажность: ${req.body[1]}, Дата: ${req.body[2]}`
  console.log(req.body)
  await fs.appendFile(logsPath, `${text}\r\n`)
})

app.listen(port, () => console.log(`Server listening on port ${port}`))