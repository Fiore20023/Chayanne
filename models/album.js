

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definir el esquema de Canción
const CancionSchema = new Schema({
  titulo: {
    type: String,
    required: true,
  },
  duracion: {
    type: Number,
    required: true,
  },
  youtubeLink: {
    type: String,
    required: true,
    match: [
      /^https?:\/\/(www.youtube.com|youtu.be)\/.+$/,
      "Por favor, ingrese un enlace válido de YouTube",
    ],
  },
});

// Definir el esquema de Álbum
const AlbumSchema = new Schema({
  nombreAlbum: {
    type: String,
    required: true,
  },
  lanzamiento: {
    type: Number,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 200,
  },
  imagen: {
    type: String,
    match: [
      /^https?:\/\/.+\.(jpg|jpeg|png|gif)$/,
      "Por favor, ingrese una URL válida para la imagen",
    ],
  },
  favoritos: {
    type: Boolean,
    default: false,
  },
  listadoCanciones: [CancionSchema],
});

// Crear los modelos
const Album = mongoose.model('Album', AlbumSchema);
const Cancion = mongoose.model('Cancion', CancionSchema);

// Exportar los modelos
module.exports = { Album, Cancion };



