const  album  = require('../models/album');

const express = require('express');
const router = express.Router();



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
        const albumActualizado = await album.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!albumActualizado) {
            return res.status(404).json({ error: 'Álbum no encontrado' });
        }
        res.json(albumActualizado);
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
/*router.get('/:id', async (req, res) => {
    try {
        const albumEncontrado = await album.findById(req.params.id);
        if (!albumEncontrado) {
            return res.status(404).json({ error: 'Álbum no encontrado' });
        }
        res.json(albumEncontrado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});*/

// Obtener un álbum específico
router.get('/:id', async (req, res) => {
    try {
        const albumEncontrado = await album.findById(req.params.id);
        if (!albumEncontrado) {
            return res.status(404).json({ error: 'Álbum no encontrado' });
        }
        res.json(albumEncontrado);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el álbum' });
    }
});

// Eliminar un álbum
router.delete('/:id', async (req, res) => {
    try {
        let albumEliminado = await album.findByIdAndDelete(req.params.id);
        if (!albumEliminado) {
            return res.status(404).json({ error: 'Álbum no encontrado' });
        }
        res.json({ message: 'Álbum eliminado correctamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;

