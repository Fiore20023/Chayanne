
document.addEventListener('DOMContentLoaded', function () {
  // Función para obtener el ID del álbum desde la URL
  function getAlbumIdFromUrl() {
      const params = new URLSearchParams(window.location.search);
      return params.get('id');
  }

  // Obtener el ID del álbum de la URL
  const albumId = getAlbumIdFromUrl();

  

  // Obtener elementos del DOM para mostrar los detalles del álbum
  const nombreAlbumElement = document.getElementById('nombreAlbum');
  const lanzamientoElement = document.getElementById('lanzamiento');
  const imagenElement = document.getElementById('imagen');
  const detalleElement = document.getElementById('detalle');
  const listadoCancionesElement = document.getElementById('listadoCanciones');

  // Obtener y mostrar los detalles del álbum
  getAlbumDetails(albumId);

  async function getAlbumDetails(albumId) {
      try {
          // Obtener los detalles del álbum del servidor
          const response = await axios.get(`http://localhost:5000/albums/${albumId}`);
          const album = response.data;
          
          // Llamar a la función para renderizar los detalles del álbum
          renderAlbumDetails(album);
      } catch (error) {
          console.error('Error fetching album details:', error);
          // Mostrar un mensaje de error en el DOM si ocurre un error al obtener los detalles del álbum
          detalleElement.textContent = 'Error fetching album details. Please try again later.';
      }
  }

  // Función para renderizar los detalles del álbum en el DOM
  function renderAlbumDetails(album) {
      // Mostrar los detalles del álbum en la página
      nombreAlbumElement.textContent = album.nombreAlbum;
      lanzamientoElement.textContent = `Año de lanzamiento: ${album.lanzamiento}`;
      imagenElement.src = album.imagen || 'chayanne.ico'; // URL de la imagen del álbum
      detalleElement.textContent = album.descripcion;

      // Mostrar el listado de canciones
      if (album.canciones && album.canciones.length > 0) {
          listadoCancionesElement.innerHTML = '';
          album.canciones.forEach(cancion => {
              const li = document.createElement('li');
              li.textContent = `${cancion.titulo} - Duración: ${cancion.duracion} -${cancion.youtubeLink}`;
              listadoCancionesElement.appendChild(li);
          });
      } else {
          listadoCancionesElement.innerHTML = '<p>No se encontraron canciones para este álbum.</p>';
      }
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const addSongLink = document.getElementById('addSongLink'); // Obtener el enlace "Agregar Canción"

  addSongLink.addEventListener('click', function (event) {
      event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

      const albumId = getAlbumIdFromUrl(); // Obtener el ID del álbum desde la URL
      if (albumId) {
          window.location.href = `addSong.html?id=${albumId}`; // Redirigir al formulario de agregar canción con el ID del álbum
      } else {
          console.error('No se encontró el ID del álbum en la URL');
      }
  });
});

function getAlbumIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}