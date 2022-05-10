const express = require('express')
const router = express.Router()
const { getCode, register } = require('../controllers/deviceController')

router.post('/device', getCode )

router.post('/register', register)


/* router.post('/device/register', (req, res) => {
    res.status(200).json( req.dody )
}) */

/*


{
    deviceId: "NW-H-20-0017",
    activationCode: "XB67FGC2561XDFG2"
} 
{
    deviceId: "NW-H-20-0017",
    deviceApiKey: "489d5e8e1a4081a99da486b526a694f6",
    devicwType: "leasing",
    timestamp: "2021-07-01 00:00:00"
} 





router.get('/device/info/{id}', (req, res) => {
    res.status(200).json({ message: 'Info from routes'})
})

router.get('/device', (req, res) => {
    res.status(200).json({ message: 'Devices from routes'})
}) */

module.exports = router
