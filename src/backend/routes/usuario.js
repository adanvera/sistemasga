const express = require('express')
const { usuarioPost,usuarioMostrar, usuarioModificar,usuarioEliminar, usuariosPut } = require('../controllers/usuarios')
const router = express.Router()
/* EndPoint */
router.post('/',usuarioPost)
router.get('/',usuarioMostrar)
router.put('/:id',usuariosPut)
router.delete('/:id',usuarioEliminar)


module.exports = router 
