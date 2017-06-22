var express = require('express');
var bodyParser = require('body-parser');
var api = require('./routes/favs');

var app = express();



// AÚN NO SÉ QUÉ HACE ESTO
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// OBTENER UNA RUTA
app.use('/api', api);

module.exports = app;
