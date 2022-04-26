const express = require('express')
const { crearBacklog, obtenerBacklog } = require('../controllers/backlog')
const router = express.Router()

router.post('/crear-backlog',crearBacklog)
router.get('/obtener-backlog',obtenerBacklog)





module.exports = router