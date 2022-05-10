const cors      = require('cors')
const express   = require('express')
const http      = require('http')
const app       = express()
const dotenv    = require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api', require('./routes/devices'))

const PORT = process.env.PORT || 4001

const httpServer = http.createServer(app)
httpServer.listen( PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT: ${PORT}`)
})
