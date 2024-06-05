const express = require('express');
const router = express.Router();
const { User } = require('../models');

// Crear un usuario
router.post('/usuarios', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser .save();
        res.status(201).json(newUser );
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Obtener un usuario por id (excluyendo la contraseña)
router.get('/usuario/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Editar los datos de un usuario
router.put('/usuario/:id', async (req, res) => {
    try {
        const editUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).select('-password');
        if (!editUser) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json(editUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});