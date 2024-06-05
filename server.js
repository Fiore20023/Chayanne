
// Iniciar el servidor
/*app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app; // Exportar la instancia de la aplicación Express
module.exports = proyectoChayanne;*/

const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const port = /*process.env.PORT ||*/ 5000;

// Conectar a MongoDB
mongoose
  .connect("mongodb+srv://Fiorella:Prueba2024@cluster0.hdrctxp.mongodb.net/proyectoChayanne?retryWrites=true&w=majority&appName=Cluster0l")
  .then(function(db){
    console.log("Conectado a MongoDB");
  })
  .catch(function(err){
    console.log(err);
  });

// Middleware: utilizar el paquete cors
app.use(cors());
app.use(express.json());

// Importar rutas
const router = require("./routers/index");

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Usar las rutas middleware
app.use('/', router);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor funcionando en el puerto ${port}`);
});

// Exportar la instancia de la aplicación Express
module.exports = app;







