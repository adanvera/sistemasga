const express = require('express')
const { obtenerProyectos, agregarProyecto } = require('../controllers/proyectos')
const router = express.Router()
router.get('/',obtenerProyectos)
router.post('/nuevo-proyecto',agregarProyecto)

module.exports = router