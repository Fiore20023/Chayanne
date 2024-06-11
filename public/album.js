
document.addEventListener('DOMContentLoaded', function () {
  function getAlbumIdFromUrl() {
      const params = new URLSearchParams(window.location.search);
      return params.get('id');
  }

  const albumId = getAlbumIdFromUrl();
  const nombreAlbumElement = document.getElementById('nombreAlbum');
  const lanzamientoElement = document.getElementById('lanzamiento');
  const imagenElement = document.getElementById('imagen');
  const detalleElement = document.getElementById('detalle');
  const listadoCancionesElement = document.getElementById('listadoCanciones');

  getAlbumDetails(albumId);

  async function getAlbumDetails(albumId) {
      try {
          const response = await axios.get(`https://chayanne.onrender.com//albums/${albumId}`);
          const album = response.data;
          renderAlbumDetails(album);
      } catch (error) {
          console.error('Error fetching album details:', error);
          detalleElement.textContent = 'Error fetching album details. Please try again later.';
      }
  }

  function renderAlbumDetails(album) {
      nombreAlbumElement.textContent = album.nombreAlbum;
      lanzamientoElement.textContent = `Año de lanzamiento: ${album.lanzamiento}`;
      imagenElement.src = album.imagen || 'chayanne.ico';
      detalleElement.textContent = album.descripcion;

      if (album.canciones && album.canciones.length > 0) {
          listadoCancionesElement.innerHTML = '';
          album.canciones.forEach(cancion => {
              const li = document.createElement('li');
              li.innerHTML = `${cancion.titulo} - Duración: ${cancion.duracion} - <a href="${cancion.youtubeLink}" target="_blank">YouTube Link</a>`;
              listadoCancionesElement.appendChild(li);
          });
      } else {
          listadoCancionesElement.innerHTML = '<p>No se encontraron canciones para este álbum.</p>';
      }
  }

  const addSongLink = document.getElementById('addSongLink');
  addSongLink.addEventListener('click', function (event) {
      event.preventDefault();
      const albumId = getAlbumIdFromUrl();
      if (albumId) {
          window.location.href = `addSong.html?id=${albumId}`;
      } else {
          console.error('No se encontró el ID del álbum en la URL');
      }
  });

  const editAlbum = document.getElementById('editAlbum');
  editAlbum.addEventListener('click', function (event) {
      event.preventDefault();
      const albumId = getAlbumIdFromUrl();
      if (albumId) {
          window.location.href = `editAlbum.html?id=${albumId}`;
      } else {
          console.error('No se encontró el ID del álbum en la URL');
      }
  });
});
