const express = require('express')
const { usuarioPost,usuarioMostrar, usuarioModificar,usuarioEliminar } = require('../controllers/usuarios')
const router = express.Router()
/* EndPoint */
router.post('/',usuarioPost)
router.get('/',usuarioMostrar)
router.put('/',usuarioModificar)
router.delete('/:id',usuarioEliminar)


module.exports = router 
