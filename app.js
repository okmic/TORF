const express = require('express')

const app = express()

const cors = require('cors');

app.use(cors({
  origin: '*'
}))

app.use(express.json({extended: true}))

app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT ?? 5000

const routes = require('./settings/routes.js')
routes(app)


app.listen(port, () => console.log(`Server listening on port ${port}`))