const express = require('express')
const { obtenerProyectos, agregarProyecto, eliminarProyecto, agregarUsuarioProyecto, actualizarProyecto, obtenerProyectosById } = require('../controllers/proyectos')
const router = express.Router()
router.get('/',obtenerProyectos)
router.get('/:id',obtenerProyectosById)
router.post('/nuevo-proyecto',agregarProyecto)
router.delete('/eliminar/:id',eliminarProyecto)
router.put('/agregar-usuarios/:id',agregarUsuarioProyecto)
router.put('/actualizar-proyecto/:id',actualizarProyecto)

module.exports = router