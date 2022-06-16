const express = require('express')
const { crearSprint, obtenerSprint, modificarSprint, agregarUs, obtenerSprintByID } = require('../controllers/sprint')
const router = express.Router()
/* EndPoint */
router.post('/crear-sprint',crearSprint)
router.post('/add-us-sprint/:id',agregarUs)
router.get('/obtener-sprint/:id',obtenerSprintByID)
router.put('/actualizar-sprint/:id',modificarSprint)


module.exports = router 
