const express = require('express')
const { obtenerRoles,agregarRoles,elimarRol,actualizarRol } = require('../controllers/role')
const router = express.Router()

router.get('/',obtenerRoles)
router.post('/',agregarRoles)
router.delete('/:id',elimarRol)
router.put('/:id',actualizarRol)


module.exports = router 