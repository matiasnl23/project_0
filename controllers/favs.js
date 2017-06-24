var Favorito = require('../models/favs');

var prueba = (req, res) => {
  res.status(200).send({
    'title': 'MatDESK',
    'path': '/home',
    'url': 'localhost',
    'nombre': req.params.nombre,
  });
}

// EJEMPLO DE OBTENER UN REGISTRO POR ID
var getFavorito = (req, res) => {
  var favoritoID = req.params.id;
  console.log(favoritoID);

  Favorito.findById(favoritoID, (err, favorito) => {
    if(!err) {
      if(favorito) {
        res.status(200).send({favorito});
      } else {
        res.status(404).send({
          mensaje: 'No se ha encontrado ningún marcador.',
        })
      }
    } else {
      res.status(500).send({
        mensaje: 'Error al procesar la petición en la base de datos.',
      })
    }
  })
}

// EJEMPLO DE OBTENER VARIOS REGISTROS
var getFavoritos = (req, res) => {
  Favorito.find({}).sort('-title').exec((err, favoritos) => {
    if(!err) {
      if(favoritos) {
        res.status(200).send({
          favoritos
        })
      } else {
        res.status(404).send({
          mensaje: 'No hay ningún dato disponible',
        });
      }
    } else {
      res.status(500).send({
        mensaje: 'Error al devolver los marcadores.'
      })
    }
  });
}

// EJEMPLO DE INGRESAR UN REGISTRO
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

// EJEMPLO DE ELIMINAR UN REGISTRO POR ID
var deleteFavorito = (req, res) => {
  var favoritoID = req.params.id;
  console.log(favoritoID);

  Favorito.findById(favoritoID, (err, favorito) => {
    if(!err) {
      if(favorito) {
        favorito.remove((err) => {
          if(!err) {
            res.status(200).send({
              mensaje: 'El marcador ha sido eliminado.',
            })
          } else {
            res.status(500).send({
              mensaje: 'Error al procesar la petición en la base de datos.',
            })
          }
        })
      } else {
        res.status(404).send({
          mensaje: 'No se ha encontrado ningún marcador.',
        })
      }
    } else {
      res.status(500).send({
        mensaje: 'Error al procesar la petición en la base de datos.',
      })
    }
  })
}

// EJEMPLO DE ACTUALIZAR UN REGISTRO POR ID
var updateFavorito = (req, res) => {
  var favoritoID = req.params.id;
  var data = req.body;

  Favorito.findByIdAndUpdate(favoritoID, data, (err, favoritoBefore) => {
    if(!err) {
      res.status(200).send({favoritoBefore});
    } else {
      res.status(500).send({
        mensaje: 'Error al procesar la petición en la base de datos.',
      });
    }
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
