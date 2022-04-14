const express = require('express')
const path = require('path')
const fs = require('fs').promises

const app = express()
const cors = require('cors');

app.use(cors({
  origin: '*'
}))
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'pages'))
app.use(express.json({extended: true}))

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT ?? 5000
const logsPath = path.resolve(__dirname, 'data', 'logs.txt')

app.get('/', async (req, res) => {
  const data = await fs.readFile(logsPath, 'utf-8')
  const logs = data.split('\r\n').filter(i => !!i)
  res.render('index', {logs})
})

app.post('/', async (req, res) => {
  const text = `Температура: ${req.body[0]}, Влажность: ${req.body[1]}, Дата: ${req.body[2]}`
  console.log(req.body)
  await fs.appendFile(logsPath, `${text}\r\n`)
  res.redirect('/')
})

app.listen(port, () => console.log(`Server listening on port ${port}`))