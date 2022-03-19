const express = require('express')
const { obtenerRoles,agregarRoles } = require('../controllers/role')
const router = express.Router()

router.get('/',obtenerRoles)
router.post('/',agregarRoles)


module.exports = router 