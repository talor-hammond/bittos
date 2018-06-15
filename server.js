let express = require('express')
let server = express()
let router = require('./routes')
const hbs = require('express-handlebars')

server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')
server.use(express.urlencoded({extended: true}))
server.use(express.static('public'))

server.use('/', router)

module.exports = server
