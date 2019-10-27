const express = require('express')

const path = require('path')

const rootDir = require('../helpers/path')

const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile(path.join(rootDir, "views", 'game.html'))
})

module.exports = router