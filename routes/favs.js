var express = require('express');
var FavsController = require('../controllers/favs');

var api = express.Router();

api.get('/prueba/:nombre?', FavsController.prueba);
api.get('/favorito/:id', FavsController.getFavorito);
api.get('/favoritos', FavsController.getFavoritos);
api.post('/favorito', FavsController.saveFavorito);
api.put('/favorito', FavsController.updateFavorito);
api.delete('/favorito/:id', FavsController.deleteFavorito);

module.exports = api;
