var express = require('express');
var FavsController = require('../controllers/favs');

var api = express.Router();

api.get('/prueba/:nombre?', FavsController.prueba);
api.get('/favorito/:id', FavsController.getFavorito);         // EJEMPLO DE OBTENER UN REGISTRO POR ID
api.get('/favoritos', FavsController.getFavoritos);           // EJEMPLO DE OBTENER VARIOS REGISTROS
api.post('/favorito', FavsController.saveFavorito);           // EJEMPLO DE INGRESAR UN REGISTRO
api.put('/favorito/:id', FavsController.updateFavorito);      // EJEMPLO DE ACTUALIZAR UN REGISTRO
api.delete('/favorito/:id', FavsController.deleteFavorito);   // EJEMPLO DE ELIMINAR UN REGISTRO

module.exports = api;
