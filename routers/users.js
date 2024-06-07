

const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Registrar un nuevo usuario
router.post('/register', async (req, res) => {
    try {
        const { nombre, apellido, mail, pass } = req.body;
        const user = new User({ nombre, apellido, mail, pass });
        await user.save();
        res.status(201).json({ message: 'Usuario registrado correctamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Iniciar sesión
router.post('/login', async (req, res) => {
    try {
        const { mail, pass } = req.body;
        const user = await User.findOne({ mail });
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const isMatch = await bcrypt.compare(pass, user.pass);
        if (!isMatch) {
            return res.status(400).json({ error: 'Contraseña incorrecta' });
        }

        const token = jwt.sign({ userId: user._id }, 'secretKey', { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;



