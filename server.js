

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require ('dotenv');
dotenv.config()
const cors = require('cors');
const path = require('path');
const app = express();
const port = 5000;
const password = process.env.PASSWORD;

// Conectar a MongoDB
mongoose.connect("mongodb+srv://Fiorella:Prueba2024@cluster0.hdrctxp.mongodb.net/proyectoChayanne?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));

    console.log(process.env)

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Importar y usar enrutadores
app.use("/health", (req, res) => res.sendStatus(200));
const albumRouter = require('./routers/albums');
const userRouter = require('./routers/users'); // Agregada ruta usuario

app.use('/albums', albumRouter);
app.use('/users', userRouter); // Añadir rutas de usuarios

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

