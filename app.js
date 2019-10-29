const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')


const rootDir = require('./helpers/path')
const landingPage = require('./routes/landing')
const gameRoutes = require('./routes/game')
const findCoach = require('./routes/find-coach')
const about = require('./routes/about')


const app = express()

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}))

app.use(landingPage)
app.use(gameRoutes)
app.use(findCoach)
app.use(about)

app.use('/', (req, res) => {
    res.sendFile(path.join(rootDir, "views", "404.html"))
})

app.listen(3000)