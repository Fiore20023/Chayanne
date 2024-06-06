
/*const getAlbumIdFromUrl = () => {
  const params = new URLSearchParams(window.location.search);
  const albumId = params.get('album');
  console.log('Album ID from URL:', albumId);  // Verify the album ID obtained
  return albumId;
};

document.addEventListener('DOMContentLoaded', function() {
  const albumId = getAlbumIdFromUrl();
  if (albumId) {
    getAlbum(albumId);
  } else {
    console.error('Album ID is undefined');
  }

  // Check if element exists before adding event listener
  const homeElement = document.getElementById("home");
  if (homeElement) {
    homeElement.addEventListener("click", function() {
      window.location.href = 'index.html';
    });
  }

  const addAlbumElement = document.getElementById("addAlbum");
  if (addAlbumElement) {
    addAlbumElement.addEventListener("click", function() {
      window.location.href = 'addAlbum.html';
    });
  }

  const editAlbumElement = document.getElementById("editAlbum");
  if (editAlbumElement) {
    editAlbumElement.addEventListener("click", function() {
      if (albumId) {
        window.location.href = `editAlbum.html?album=${albumId}`;
      } else {
        window.location.href = 'editAlbum.html';
      }
    });
  }

  const addSongsElement = document.getElementById("addSongs");
  if (addSongsElement) {
    addSongsElement.addEventListener("click", function() {
      if (albumId) {
        window.location.href = `addSongs.html?album=${albumId}`;
      } else {
        window.location.href = "addSongs.html";
      }
    });
  }

  const toursElement = document.getElementById("tours");
  if (toursElement) {
    toursElement.addEventListener("click", function() {
      window.location.href = "Tours.html";
    });
  }

  const logoutElement = document.getElementById("logout");
  if (logoutElement) {
    logoutElement.addEventListener("click", function() {
      window.location.href = "login.html";
    });
  }
  
  console.log("Fetching album with id:", albumId);
});

const getAlbum = async (albumId) => {
  try {
    const response = await axios.get(`http://localhost:5000/albums/${albumId}`);
    console.log(response.data);
    const albumToUse = response.data;
    renderAlbum(albumToUse);
  } catch (error) {
    console.log(error);
    swal({
      title: 'Error!',
      text: `${error.response.data}`,
      icon: 'error',
      confirmButtonText: 'Ok'
    });
    window.location.href = "./index.html";
  }
};

function renderAlbum(album) {
  const div = document.getElementById("view-album");

  // Show title
  const h1 = document.createElement('h1');
  h1.classList.add('text-white', 'text-5xl', 'mt-20', 'mb-4', 'ml-4', 'font-bold');
  h1.textContent = album.titulo;
  div.appendChild(h1);

  // Show album cover
  const img = document.createElement('img');
  img.src = album.portada ? album.portada : 'https://imgur.com/0uSALUr.png';
  img.alt = `Portada de ${album.titulo}`;
  img.style.width = '250px'; // Adjust the size of the image as needed
  img.style.height = '250px';
  div.appendChild(img);

  // Show description
  const p = document.createElement('p');
  p.classList.add('text-white', 'mb-4', 'ml-4', 'w-1/2');
  p.textContent = "Descripción: " + album.descripcion;
  div.appendChild(p);
  
  // Render songs
  if (album.canciones) {
    renderSongs(album);
  }
  
  // Add songs
  const redirect = (id) => { window.location.href = `./addSongs.html?album=${id}` };
  const boton = document.getElementById("boton");
  if (boton) {
    boton.addEventListener("click", () => redirect(getAlbumIdFromUrl()));
  }

  const redirect2 = (id) => { window.location.href = `./editAlbum.html?album=${id}` };
  const boton2 = document.getElementById("boton2");
  if (boton2) {
    boton2.addEventListener("click", () => redirect2(getAlbumIdFromUrl()));
  }
}

function renderSongs(album) {
  const div = document.getElementById("view-album");
  const songList = document.createElement('ol');
  songList.classList.add('list-decimal', 'ml-6');

  album.canciones.forEach((cancion, index) => {
    const songItem = document.createElement('li');
    songItem.classList.add('text-white', 'flex', 'items-center', 'justify-between', 'my-2');

    const songDetails = document.createElement('span');
    songDetails.textContent = `${index + 1}. ${cancion.titulo} - ${cancion.duracion}`;
    songItem.appendChild(songDetails);

    const actions = document.createElement('div');

    const youtubeIcon = document.createElement('a');
    youtubeIcon.href = cancion.youtubeLink;
    youtubeIcon.target = '_blank';
    youtubeIcon.classList.add('ml-4');
    youtubeIcon.innerHTML = '<i class="fa fa-youtube-play text-red-500"></i>';
    actions.appendChild(youtubeIcon);

    const deleteIcon = document.createElement('span');
    deleteIcon.classList.add('ml-4', 'cursor-pointer');
    deleteIcon.innerHTML = '<i class="fa fa-trash text-red-500"></i>';

    deleteIcon.addEventListener("click", function() {
      const index = Array.from(songList.children).indexOf(songItem);
      const updatedAlbum = { ...album }; 
      updatedAlbum.canciones.splice(index, 1);
      deleteSong(updatedAlbum); 
    });
    actions.appendChild(deleteIcon);

    songItem.appendChild(actions);
    songList.appendChild(songItem);
  });

  div.appendChild(songList);
}

const deleteSong = async (updatedAlbum) => {
  try {
    const id = updatedAlbum._id;
    const response = await axios.put(`http://localhost:5000/albums/band/${id}`, updatedAlbum);
    swal("Éxito", "La canción ha sido eliminada correctamente", "success")
      .then(() => {
        window.location.reload();
      });
  } catch (error) {
    console.error(error);
    swal("Error", "No se pudo eliminar la canción", "error");
  }
};*/
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
              li.textContent = `${cancion.titulo} - Duración: ${cancion.duracion}`;
              listadoCancionesElement.appendChild(li);
          });
      } else {
          listadoCancionesElement.innerHTML = '<p>No se encontraron canciones para este álbum.</p>';
      }
  }
});
