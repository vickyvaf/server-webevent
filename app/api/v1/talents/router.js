const express = require('express')
const { create, destroy, find, index, update } = require('./controller')

const router = express()

router.get('/talents', index)
router.get('/talents/:id', find)
router.post('/talents', create)
router.put('/talents/:id', update)
router.delete('/talents/:id', destroy)

module.exports = router
