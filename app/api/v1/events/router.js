const express = require('express')
const { create, destroy, find, index, update } = require('./controller')
const { authenticateUser, authorizeRoles } = require('../../../middlewares/auth')
const router = express()

router.get('/events', authenticateUser, authorizeRoles('organizer'), index)
router.get('/events/:id', authenticateUser, authorizeRoles('organizer'), find)
router.post('/events', authenticateUser, authorizeRoles('organizer'), create)
router.put('/talents/:id', authenticateUser, authorizeRoles('organizer'), update)
router.delete('/talents/:id', authenticateUser, authorizeRoles('organizer'), destroy)

module.exports = router