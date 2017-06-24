var express = require('express');
var bodyParser = require('body-parser');
var api = require('./routes/favs');

var app = express();



// AÚN NO SÉ QUÉ HACE ESTO
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// CONFIGURACIÓN DE HEADERS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPCTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPCTIONS, PUT, DELETE');

  next();
})

// OBTENER UNA RUTA
app.use('/api', api);

module.exports = app;
