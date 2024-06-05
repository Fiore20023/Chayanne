/*const express = require('express');
const router = express.Router();
const  Cancion  = require('../models');

// Agregar una canción a un álbum
router.post('album/canciones/:id', async (req, res) => {
    try { console.log ("cargando cancion");
        const album = await Album.findById(req.params.id);
        if (!album) {
            return res.status(404).json({ error: 'Álbum no encontrado' });
        }
       const nuevaCancion = {
            titulo: req.body.titulo,
            duracion: req.body.duracion,
            youtubeLink: req.body.youtubeLink
        };
        const updatedAlbum = await album.findByIdAndUpdate(req.params.id,{ $push: { canciones: nuevaCancion } });
        res.send("Cancion agregada al álbum");
        /*album.canciones.push(req.body);
        await album.save();
        res.json(album);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});



// Eliminar una canción de un álbum
router.delete('/album/canciones/:id', async (req, res) => {
    try {
        const album = await album.findById(req.params.id);
        if (!album) {
            return res.status(404).json({ error: 'Álbum no encontrado' });
        }
        album.canciones.id(req.params.songId).remove();
        await album.save();
        res.json(album);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});*/