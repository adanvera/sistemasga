const express = require('express')
const { crearSprint,modificarSprint, agregarUs, obtenerSprintByID, getAllSprint, sprintByProjectId } = require('../controllers/sprint')
const router = express.Router()
/* EndPoint */
router.post('/crear-sprint',crearSprint)
router.post('/add-us-sprint/:id',agregarUs)
router.get('/obtener-sprint/:id',obtenerSprintByID)
router.get('/sprint-by-project/:id',sprintByProjectId)
router.get('/obtener-sprint/',getAllSprint)
router.put('/actualizar-sprint/:id',modificarSprint)


module.exports = router 
