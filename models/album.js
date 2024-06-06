const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Definir el esquema de Álbum
const AlbumSchema = new Schema({
  nombreAlbum: {
    type: String,
    required: true,
  },
  lanzamiento: {
    type: Number,
    required: true, 
    validate: {
      validator: function(v) {
          return v > 0;
      },
      message: 'El año de lanzamiento debe ser mayor a cero.'
    }
  },
  descripcion: {
    type: String,
    required: true, 
    minlength: 5, 
    maxlength: 200, 
  },
  imagen: {
    type: String,
  },
  canciones: [{
    titulo: {
      type: String,
      required: true
    },
    duracion: {
      type: String,
      required: true
    },
    youtubeLink: {
      type: String,
      required: true
    }
  }]
});

// Crear el modelo de Álbum
const Album = mongoose.model("Album", AlbumSchema);

// Exportar el modelo
module.exports = Album;

