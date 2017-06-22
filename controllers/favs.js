var Favorito = require('../models/favs');

var prueba = (req, res) => {
  res.status(200).send({
    'title': 'MatDESK',
    'path': '/home',
    'url': 'localhost',
    'nombre': req.params.nombre,
  });
}

var getFavorito = (req, res) => {
  var favoritoID = req.params.id;
  res.status(200).send({
    data: favoritoID
  });
}

var getFavoritos = (req, res) => {
  Favorito.find({}).sort('-title').exec((err, favoritos) => {
    if(!err) {
      if(!favoritos) {
        res.status(404).send({
          mensaje: 'No hay ningún dato disponible',
        })
      } else {
        res.status(200).send({favoritos});
      }
    } else {
      res.status(500).send({
        mensaje: 'Error al devolver los marcadores.'
      })
    }
  });
}

var saveFavorito = (req, res) => {
  var favorito = new Favorito();

  var params = req.body;
  favorito.title = params.title;
  favorito.desc = params.desc;
  favorito.url = params.url;

  favorito.save((err, favoritoStored) =>{
    if(!err) {
      res.status(200).send({
        favorito: favoritoStored,
      })
    } else {
      res.status(500).send({
        mensaje: 'Error al guardar el marcador.'
      })
    }
  });
}

var deleteFavorito = (req, res) => {
  var favoritoID = req.params.id;
  res.status(200).send({
    delete: true,
    data: favoritoID
  });
}

var updateFavorito = (req, res) => {
  var favoritoID = req.body;
  res.status(200).send({
    update: true,
    data: favoritoID
  });
}


module.exports = {
  prueba,
  getFavorito,
  getFavoritos,
  saveFavorito,
  deleteFavorito,
  updateFavorito,
  getFavoritos
}
