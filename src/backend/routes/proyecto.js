const express = require('express')
const { obtenerProyectos, agregarProyecto, eliminarProyecto, agregarUsuarioProyecto } = require('../controllers/proyectos')
const router = express.Router()
router.get('/',obtenerProyectos)
router.post('/nuevo-proyecto',agregarProyecto)
router.delete('/eliminar/:id',eliminarProyecto)
router.put('/agregar-usuarios/:id',agregarUsuarioProyecto)

module.exports = router