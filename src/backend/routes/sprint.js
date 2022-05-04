const express = require('express')
const { crearSprint, obtenerSprint } = require('../controllers/sprint')
const router = express.Router()
/* EndPoint */
router.post('/crear-sprint',crearSprint)
router.get('/obtener-sprint',obtenerSprint)


module.exports = router 
