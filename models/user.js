

let mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definir la regex para validar el email
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// Definir el esquema de usuario
let UserSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        minlength: [2, 'El nombre debe tener al menos 2 caracteres']
    },
    apellido: {
        type: String,
        required: [true, 'El apellido es obligatorio'],
        minlength: [2, 'El apellido debe tener al menos 2 caracteres']
    },
    email: {
        type: String,
        required: [true, 'El email es obligatorio'],
        unique: true,
        match: [emailRegex, 'Por favor, ingrese un email válido']
    },
    contraseña: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    
});

// Crear el modelo de usuario
const User = mongoose.model('User', UserSchema);

module.exports = User;