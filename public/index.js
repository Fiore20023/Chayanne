document.addEventListener('DOMContentLoaded', function () {
  // Obtener el contenedor de álbumes
  const albumsContainer = document.getElementById('albums-container');

  // Verificar si el contenedor existe antes de continuar
  if (!albumsContainer) {
      console.error('Error: Element with id "albums-container" not found.');
      return;
  }

  const getAlbumIdFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      return params.get('album');
  };

  const albumId = getAlbumIdFromUrl();

  document.getElementById("home").addEventListener("click", function () {
      window.location.href = 'index.html';
  });

  document.getElementById("addAlbum").addEventListener("click", function () {
      window.location.href = 'addAlbum.html';
  });

  document.getElementById("tours").addEventListener("click", function () {
      window.location.href = "tours.html";
  });

  document.getElementById("logout").addEventListener("click", function () {
      window.location.href = "login.html";
  });

  getAlbums();

  async function getAlbums() {
      try {
          const response = await axios.get('https://chayanne.onrender.com/albums');
          renderAlbums(response.data);
      } catch (error) {
          console.error('Error fetching albums:', error);
          console.error('Failed to fetch albums. Please try again later.');
      }
  }

  function renderAlbums(albums) {
      const container = document.getElementById('albums-container');
      container.innerHTML = ''; // Limpiar el contenedor antes de renderizar los álbumes

      albums.forEach(album => {
          const albumElement = document.createElement('div');
          albumElement.className = 'album';

          const imageUrl = album.imagen || 'chayanne.ico'; // Imagen por defecto
          const albumLink = document.createElement('a');
          albumLink.href = '#'; // Esto es solo un marcador de posición, el href se actualizará por la función redirect(id)
          albumLink.onclick = () => redirect(album._id); // Redireccionar al hacer clic en el álbum
          albumLink.innerHTML = `
              <img src="${imageUrl}" alt="${album.titulo}" class="album-img">
              <h2>${album.nombreAlbum}</h2>
              <p>Año: ${album.lanzamiento}</p>
          `;

          albumElement.appendChild(albumLink);
          container.appendChild(albumElement);
      });
  }

  function redirect(id) {
      window.location.href = `album.html?id=${id}`;
  }
});
 // Función para cerrar sesión
function logout() {
    // Eliminar el token del almacenamiento local
    localStorage.removeItem('token');
    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = 'login.html';
}

