const http = require('http')
const express = require('express')

const app = express()

const hostname = '127.0.0.1'
const port = 3000

app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>')
})

app.listen(3000)