const express = require('express')
const { agregarUserStory, obtenerUsByBacklog, eliminarUS, actualizarUS, obtenerUsByEnCurso } = require('../controllers/userStory')
const router = express.Router()

router.post('/crear-us',agregarUserStory)
router.get('/obtener-us-backlog/:id',obtenerUsByBacklog)
router.get('/obtener-us-en-curso/:id',obtenerUsByEnCurso)
router.put('/actualizar-us/:id',actualizarUS)
router.delete('/eliminar-us/:id',eliminarUS)





module.exports = router