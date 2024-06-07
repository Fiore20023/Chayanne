
const express = require('express');
const router = express.Router();
const { Album } = require('../models/album');

// Obtener todos los álbumes
router.get('/', async (req, res) => {
  try {
    const albums = await Album.find();
    res.json(albums);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un álbum específico por ID
router.get('/:id', async (req, res) => {
  try {
    const album = await Album.findById(req.params.id);
    if (!album) {
      return res.status(404).json({ error: 'Álbum no encontrado' });
    }
    res.json(album);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear un nuevo álbum
router.post('/', async (req, res) => {
  try {
    const nuevoAlbum = new Album(req.body);
    await nuevoAlbum.save();
    res.status(201).json(nuevoAlbum);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Actualizar un álbum
router.put('/:id', async (req, res) => {
  try {
    const { _id, ...updateData } = req.body;
    const album = await Album.findByIdAndUpdate(req.params.id, updateData, { new: true, runValidators: true });
    if (!album) {
      return res.status(404).json({ error: 'Álbum no encontrado' });
    }
    res.json(album);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar un álbum
router.delete('/:id', async (req, res) => {
  try {
    const album = await Album.findByIdAndDelete(req.params.id);
    if (!album) {
      return res.status(404).json({ error: 'Álbum no encontrado' });
    }
    res.json({ message: 'Álbum eliminado correctamente' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;







