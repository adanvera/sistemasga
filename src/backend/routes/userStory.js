const express = require('express')
const { agregarUserStory, obtenerUsByProjectID } = require('../controllers/userStory')
const router = express.Router()

router.post('/crear-us',agregarUserStory)
router.get('/obtener-us/:id',obtenerUsByProjectID)





module.exports = router