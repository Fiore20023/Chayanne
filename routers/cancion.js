const express = require('express');
const router = express.Router();
const { Album } = require('../models/album');

// Ruta para agregar una canción a un álbum
router.put('/:id/canciones', async (req, res) => {
  try {
    const { titulo, duracion, youtubeLink } = req.body;
    const album = await Album.findById(req.params.id);
    if (!album) {
      return res.status(404).json({ error: 'Álbum no encontrado' });
    }

    const nuevaCancion = {
      titulo,
      duracion,
      youtubeLink,
    };

    album.canciones.push(nuevaCancion);
    await album.save();

    res.status(201).json(nuevaCancion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todas las canciones de un álbum
router.get('/:id/canciones', async (req, res) => {
  try {
    const album = await Album.findById(req.params.id);
    if (!album) {
      return res.status(404).json({ error: 'Álbum no encontrado' });
    }
    res.json(album.canciones);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Ruta para agregar una canción a un álbum específico
router.put('/:albumId/canciones', async (req, res) => {
    try {
      const { titulo, duracion, youtubeLink } = req.body;
      const album = await Album.findById(req.params.albumId);
      if (!album) {
        return res.status(404).json({ error: 'Álbum no encontrado' });
      }
  
      const nuevaCancion = new Cancion({
        titulo,
        duracion,
        youtubeLink,
        album: album._id,
      });
  
      await nuevaCancion.save();
  
      res.status(201).json(nuevaCancion);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
module.exports = router;






