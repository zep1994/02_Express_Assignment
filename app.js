const express = require('express')
const path = require('path')

const rootDir = require('./helpers/path')
const gameRoutes = require('./routes/game')
const landingPage = require('./routes/landing')


const app = express()

app.use(landingPage)
app.use(gameRoutes)

app.use('/', (req, res) => {
    res.sendFile(path.join(rootDir, "views", "404.html"))
})

app.listen(3000)