var app = require('./app');
var mongoose = require('mongoose');
// SI HAY ALGUNA VARIABLE DE ENTORNO QUE INDIQUE EL PUERTO, LA TOMO COMO PUERTO
var port = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost:27017/favorito_db', (err, res) => {
  if(!err) {
    console.log(`Conexión realizada correctamente con la base de datos.`);
    app.listen(port, () => {
      console.log(`Servidor: http://localhost:${port}`);
    });
  } else {
    throw err;
  }
});

// INICIO EL SERVIDOR
