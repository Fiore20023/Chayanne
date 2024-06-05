
const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const usersRouter = require('./users');
const albumsRouter = require('./albums'); // importando el contenido del album
app.use(express.json());
//router.use('/usuario', usersRouter);
router.use('/albums', albumsRouter);
//router.user ('/users',userRouter);
module.exports = router;
