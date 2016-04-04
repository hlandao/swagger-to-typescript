var swagger = require('../swagger.js')
var path = require('path')

swagger(__dirname + '/swagger.yml', './api', 'HadarApi')