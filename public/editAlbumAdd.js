// Importar Axios
const axios = require('axios');


let titulo=document.getElementById ('Album');
let albumImg=document.getElementById ('imagenAlbum');
let fecha=document.getElementById ('lanzamiento');
let descripcion=document.getElementById ('descripcion');
let guardar=document.getElementById ('guardarCambios');

guardarCambios.addEventListener(click, function(){
    axios.post( "http://localhost:5000/Album",{
      album:titulo.value,
      lanzamiento:fecha.value,
      descripcion:descripcion.value,
    }).then(function(respuesta){
        alert (respuesta);
    })
  });