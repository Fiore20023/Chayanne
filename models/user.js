

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true,
        unique: true
    },
    pass: {
        type: String,
        required: true
    }
});

// Middleware para hashear el password antes de guardarlo
UserSchema.pre('save', async function (next) {
    if (this.isModified('pass')) {
        this.pass = await bcrypt.hash(this.pass, 10);
    }
    next();
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
