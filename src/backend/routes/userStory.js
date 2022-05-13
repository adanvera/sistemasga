const express = require('express')
const { agregarUserStory, obtenerUsByBacklog, eliminarUS, actualizarUS, obtenerUsByEnCurso, obtenerUsByDetenido, obtenerUsByVerificar, obtenerUsByEnVerificacion, obtenerUsByFinalizado } = require('../controllers/userStory')
const router = express.Router()

router.post('/crear-us',agregarUserStory)
router.get('/obtener-us-backlog/:id',obtenerUsByBacklog)
router.get('/obtener-us-en-curso/:id',obtenerUsByEnCurso)
router.get('/obtener-us-detenido/:id',obtenerUsByDetenido)
router.get('/obtener-us-verificar/:id',obtenerUsByVerificar)
router.get('/obtener-us-verificacion/:id',obtenerUsByEnVerificacion)
router.get('/obtener-us-finalizado/:id',obtenerUsByFinalizado)
router.put('/actualizar-us/:id',actualizarUS)
router.delete('/eliminar-us/:id',eliminarUS)





module.exports = router