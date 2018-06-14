let express = require('express')
let server = express()

server.get('/', (req, res) => {

    res.send('Yeah')

})

module.exports = server