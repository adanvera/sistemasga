const express = require('express')
const { agregarUserStory, obtenerUsByBacklog, eliminarUS } = require('../controllers/userStory')
const router = express.Router()

router.post('/crear-us',agregarUserStory)
router.get('/obtener-us-backlog/:id',obtenerUsByBacklog)
router.delete('/eliminar-us/:id',eliminarUS)





module.exports = router