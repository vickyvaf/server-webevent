const express = require('express')
const { createCMSOrganizer, createCMSUser } = require('./controller')
const router = express()
const { authenticateUser, authorizeRoles } = require('../../../middlewares/auth')

router.post('/organizers', createCMSOrganizer)
router.post('/users', authenticateUser, createCMSUser)

module.exports = router