
const mongoose = require('mongoose');

const CancionSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    duracion: { type: String, required: true },
    youtubeLink: { type: String, required: true }
});

const AlbumSchema = new mongoose.Schema({
    nombreAlbum: { type: String, required: true },
    lanzamiento: { type: String, required: true },
    descripcion: { type: String, required: true },
    imagen: { type: String, required: true },
    canciones: [CancionSchema]
});

const Album = mongoose.model('Album', AlbumSchema);

module.exports = { Album };

