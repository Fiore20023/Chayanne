/*const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Definir el esquema de Canción
const CancionSchema = new Schema({
  titulo: {
    type: String,
    // required: [true, 'El título de la canción es obligatorio']
  },
  duracion: {
    type: String, // Duración en formato 'mm:ss' o 'hh:mm:ss'
    // required: [true, 'La duración de la canción es obligatoria']
  },
  linkYoutube: {
    type: String,
    //  required: [true, 'No es un link de youtube'],
    // match: [/^https?:\/\/(www\.)?youtube\.com\/watch\?v=.+$/, 'Por favor, ingrese una URL válida de YouTube']
  },
});


module.exports=mongoose.models("cancion",CancionSchema )*/