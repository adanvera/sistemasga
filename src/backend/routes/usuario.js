const express = require('express')
const { usuarioPost } = require('../controllers/usuarios')
const router = express.Router()
/* EndPoint */
router.post('/',usuarioPost)


module.exports = router 
