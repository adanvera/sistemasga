const express = require('express')
const { crearSprint } = require('../controllers/sprint')
const router = express.Router()
/* EndPoint */
router.post('/crear-sprint',crearSprint)
router.get('/obtener-sprint',crearSprint)


module.exports = router 
