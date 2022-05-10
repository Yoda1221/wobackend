
/**
 * *    GET DEVICE ID AND ACTIVATIONN CODE
 * @route   POST /api/device
 * @access  Private
 * @param { OBJECT } req 
 * @param { OBJECT } res 
 */
const getCode = async (req,res) => {
    res.status(200).json({
        message: "OK",
        deviceId: "NW-H-20-0017",
        activationCode: "XB67FGC2561XDFG2"
    })
}

/**
 * *    REGISTER DEVICE TO DATABASE
 * @route   POST /api/register
 * @access  Private
 * @param { OBJECT } req 
 * @param { OBJECT } res 
 */
const register = async (req, res) => {
    const { deviceId, deviceApiKey, deviceType, timestamp } = req.body

    const devTypes = [ "unset", "restricted", "leasing", "free"]
//  furniture.includes('chair')
    if (!deviceId ) {
        res.status(400).json({ message: 'REGISTRATION FAILED!' })
    } else {
        res.status(200).json({ message: "DEVICE IS REGISTERED"})
    }
}



module.exports = {
    getCode, register
}