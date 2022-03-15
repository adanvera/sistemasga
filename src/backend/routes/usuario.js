const express = require('express')
const { usuarioPost,usuarioMostrar } = require('../controllers/usuarios')
const router = express.Router()
/* EndPoint */
router.post('/',usuarioPost)
router.get('/',usuarioMostrar)


module.exports = router 
