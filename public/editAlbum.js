// Importar Axios

const axios = require('axios');


let titulo=document.getElementById ('tituloAlbum');
let albumImg=document.getElementById ('imagenAlbum');
let otrosAlbums=document.getElementById ('demasAlbum');
let canciones=document.getElementById ('listadoCanciones');
let fecha=document.getElementById ('fechaLanzamiento');
let descripcion=document.getElementById ('detalle');
let borrar=document.getElementById ('borrar');
let guardar=document.getElementById ('guardarCambios');

/*guardarCambios.addEventListener(click, function(){
    axios.post ( "http://localhost:5000/Albums",{
      //parrafo_resp.innertext = respuesta   para mostrar respueta en el html
  });*/

  let boton = document.getElementById("botonEdit");

document.addEventListener('DOMContentLoaded', function() {
    const albumId = getAlbumIdFromUrl();
    if (albumId) {
      loadAlbumDetails(albumId);
    }
  
    document.getElementById("botonEdit").addEventListener("click", editAlbum);
  
    document.getElementById("botonCancel").addEventListener("click", function() {
      window.location.href = `./album.html?album=${albumId}`;
    });
  });
  
  const getAlbumIdFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('album');
  };
  
  const getInputValues = () => {
    return {
      titulo: document.getElementById('titulo').value,
      descripcion: document.getElementById('descripcion').value,
      portada: document.getElementById('portada').value,
    };
  };
  
  const validateInputs = (titulo, descripcion) => {
    if (titulo.trim() === '' && descripcion.trim() === '') {
      swal("Debes completar el título y la descripción", { icon: "error" });
      return false;
    } else if (titulo.trim() === '') {
      swal("Debes completar el título", { icon: "error" });
      return false;
    } else if (descripcion.trim() === '') {
      swal("Debes completar la descripción", { icon: "error" });
      return false;
    }
    return true;
  };
  
  const loadAlbumDetails = async (albumId) => {
    try {
      const response = await axios.get(`http://localhost:5000/albums/band/${albumId}`);
      const album = response.data;
      document.getElementById('titulo').value = album.titulo;
      document.getElementById('descripcion').value = album.descripcion;
      document.getElementById('portada').value = album.portada;
    } catch (error) {
      console.error('Error loading album details:', error);
      swal("Error", "No se pudo cargar la información del álbum", "error");
    }
  };
  
  const editAlbum = async (e) => {
    e.preventDefault();
    const albumId = getAlbumIdFromUrl();
    const albumData = getInputValues();
  
    if (!validateInputs(albumData.titulo, albumData.descripcion)) {
      return;
    }
  
    try {
      await axios.put(`http://localhost:5000/albums/band/${albumId}`, albumData);
      swal({
        title: '¡Álbum editado!',
        text: 'Has modificado el álbum correctamente.',
        icon: 'success',
        confirmButtonText: 'Ok'
      }).then(() => {
        window.location.href = `./album.html?album=${albumId}`;
      });
    } catch (error) {
      console.error('Error editing album:', error);
      swal("Error", "No se pudo editar el álbum", "error");
    }
  }