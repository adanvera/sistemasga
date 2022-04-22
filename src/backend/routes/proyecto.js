const express = require('express')
const { obtenerProyectos, agregarProyecto, eliminarProyecto } = require('../controllers/proyectos')
const router = express.Router()
router.get('/',obtenerProyectos)
router.post('/nuevo-proyecto',agregarProyecto)
router.delete('/eliminar/:id',eliminarProyecto)

module.exports = router