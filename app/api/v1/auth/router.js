const express = require('express')
const { signinCMS } = require('./controller')
const router = express()

router.post('/auth/signin', signinCMS)

module.exports = router