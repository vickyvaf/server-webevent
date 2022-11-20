const express = require('express')
const { create, destroy, find, index, update } = require('./controller')
const { authenticateUser, authorizeRoles } = require('../../../middlewares/auth')
const router = express()

router.get('/events', index)
router.get('/events/:id', find)
router.post('/events', create)
router.put('/talents/:id', update)
router.delete('/talents/:id', destroy)

module.exports = router