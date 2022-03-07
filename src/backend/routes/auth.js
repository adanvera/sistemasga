const express = require('express')
const { authPost } = require('../controllers/auth')
const router = express.Router()
/* EndPoint */
router.post('/',authPost)


module.exports = router
