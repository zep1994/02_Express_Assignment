const express = require('express')

const path = require('path')

const rootDir = require('../helpers/path')

const router = express.Router()

router.get('/find-coach', (req, res) => {
    res.sendFile(path.join(rootDir, "views", 'find-coach.html'))
})

//GET 
router.post('/find-coach', (req, res) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router