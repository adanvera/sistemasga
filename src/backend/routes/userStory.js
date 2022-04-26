const express = require('express')
const { agregarUserStory, obtenerUsByBacklog } = require('../controllers/userStory')
const router = express.Router()

router.post('/crear-us',agregarUserStory)
router.get('/obtener-us/:id',obtenerUsByBacklog)





module.exports = router