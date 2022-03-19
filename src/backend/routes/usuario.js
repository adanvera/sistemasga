const express = require('express')
const { usuarioPost,usuarioMostrar, usuarioModificar } = require('../controllers/usuarios')
const router = express.Router()
/* EndPoint */
router.post('/',usuarioPost)
router.get('/',usuarioMostrar)
router.put('/',usuarioModificar)


module.exports = router 
