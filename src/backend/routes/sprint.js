const express = require('express')
const { crearSprint, obtenerSprint, modificarSprint } = require('../controllers/sprint')
const router = express.Router()
/* EndPoint */
router.post('/crear-sprint',crearSprint)
router.get('/obtener-sprint',obtenerSprint)
router.put('/actualizar-sprint/:id',modificarSprint)


module.exports = router 
