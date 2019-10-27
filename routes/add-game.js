const express = require('express')

const path = require('path')

const rootDir = require('../helpers/path')

const router = express.Router()

router.get('/add-game', (req, res) => {
    res.sendFile(path.join(rootDir, "views", 'add-game.html'))
})

//GET 
router.post('/add-game', (req, res) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router