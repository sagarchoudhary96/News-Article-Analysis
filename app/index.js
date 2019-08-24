// Express Module
const express = require("express")

// Instance of app
const app = express()

// Add dependencies
const bodyParser = require('body-parser')

// MiddleWares
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// CORS for cross-origin request allowance
const cors = require("cors")
app.use(cors())

// serve html from dist diirectory
app.use(express.static('dist'))

// Import Required routes
require('./routes')(app)

module.exports = app