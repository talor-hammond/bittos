let express = require('express')
let server = require('./server.js')

let PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log('Server is running on: ' + PORT)
})