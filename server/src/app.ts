import * as express from 'express'
import * as cors from 'cors'
import * as morgan from 'morgan'
import * as bodyParser from 'body-parser'
// const express = require('express')
// const cors = require('cors')
// const morgan = require('morgan')
// const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('combined'))

app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}!`
  })
})

app.listen(process.env.PORT || 8081)
