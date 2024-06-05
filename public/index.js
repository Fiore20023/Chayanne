/*document.addEventListener('DOMContentLoaded', function() {
  // Obtener el contenedor de álbumes
  const albumsContainer = document.getElementById('albums-container');

  // Verificar si el contenedor existe antes de continuar
  if (!albumsContainer) {
    console.error('Error: Element with id "albums-container" not found.');
    return;
  }

  const getAlbums = async () => {
    try { 
      console.log("Haciendo petición al servidor...");
      const response = await axios.get('http://localhost:5000/albums');
      response.data.forEach(album => renderAlbum(album));
    } catch (error) {
      console.error('Error fetching albums:', error);
      Swal.fire('Error', 'No se pudieron cargar los álbumes', 'error');
    }
  };

  const renderAlbum = (album) => {
    const albumElement = document.createElement('div');
    albumElement.className = 'album';

      const imageUrl = album.imagen   || 'chayanne.ico'; // Imagen por defecto
    const albumImage = document.createElement('img');
    albumImage.src = imageUrl;
    
    albumImage.addEventListener('click', () => redirect(album._id)); // Redirigir al hacer clic

    albumElement.appendChild(albumImage);
    albumsContainer.appendChild(albumElement);
  };

  const redirect = (id) => {
    window.location.href = `./album.html?id=${id}`;
  };

  getAlbums();
});*/
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
          const response = await axios.get('http://localhost:5000/albums');
          renderAlbums(response.data);
      } catch (error) {
          console.error('Error fetching album:', error);
      }
  }

  function renderAlbum(album) {
      const container = document.getElementById('albums-container');
      const albumElement = document.createElement('div');
      albumElement.className = 'album';

      const imageUrl = album.imagen || 'chayanne.ico'; // Imagen por defecto
      albumElement.innerHTML = `
          <a href="album.html?id=${album._id}">
              <img src="${imageUrl}" alt="${album.titulo}" class="album-img">
              <h2>${album.nombreAlbum}</h2>
              <p>Año: ${album.lanzamiento}</p>
          </a>
      `;

      container.appendChild(albumElement);
  }

  function renderAlbums(albums) {
      albums.forEach(album => {
          renderAlbum(album);
      });
  }

  function redirect(id) {
      window.location.href = `./album.html?id=${id}`;
  }
});

