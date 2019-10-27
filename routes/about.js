const express = require('express')
const path = require('path')

const rootDir = require('../helpers/path')

const router = express.Router()

router.use('/about', (req, res) => {
    res.sendFile(path.join(rootDir, "views", "about.html"))
})

module.exports = router