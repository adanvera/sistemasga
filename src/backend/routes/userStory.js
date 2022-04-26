const express = require('express')
const { agregarUserStory, obtenerUsByBacklog } = require('../controllers/userStory')
const router = express.Router()

router.post('/crear-us',agregarUserStory)
router.get('/obtener-us-backlog/:id',obtenerUsByBacklog)





module.exports = router