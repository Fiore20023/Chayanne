
const express = require('express');
const router = express.Router();
const  album  = require('../models/album');


//crear album
router.post('/', async (req, res) => {
    try {
        console.log("Datos recibidos:", req.body);
      let datos= req.body;
     
      const nuevoAlbum = new album(datos);
      await nuevoAlbum.save();
          res.status(201).json({ message: 'Álbum agregado con éxito' });
    } catch (error) {
      res.status(400).json({ error: 'Error al agregar el álbum' });
    }
  });

  
 
// Editar un álbum ---UPDATE---
router.put('/:id', async (req, res) => {
    try {
        const album = await album.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!album) {
            return res.status(404).json({ error: 'Álbum no encontrado' });
        }
        res.json(album);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});



// Obtener todos los álbumes ---READ---
router.get('/', async (req, res) => {
    console.log ("estamos aca")
    try {
        let albums = await album.find();
        res.json(albums);
    } catch (error) {
        res.status(500).json({ menssage: 'error al obtener el album '});
    }
});

// Obtener un álbum específico
router.get('/:id', async (req, res) => {
    try {
        const album = await album.findById(req.params.id);
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
        let album = await album.findByIdAndDelete(req.params.id);
        if (!album) {
            return res.status(404).json({ error: 'Álbum no encontrado' });
        }
        res.json({ message: 'Álbum eliminado correctamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;


