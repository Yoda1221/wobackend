const express   = require('express')
const router    = express.Router()
const { getCode, register } = require('../controllers/deviceController')

router.post('/device', getCode )
router.post('/register', register)


module.exports = router
