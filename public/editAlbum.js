
document.addEventListener('DOMContentLoaded', function () {
  const albumId = getAlbumIdFromUrl();
  const editAlbumForm = document.getElementById('editAlbumForm');
  const deleteAlbumBtn = document.getElementById('borrarAlbum'); // Cambiado de 'borrar' a 'borrarAlbum'
  const cancelarCambiosBtn = document.getElementById('cancelarCambios');

  // Función para obtener el ID del álbum desde la URL
  function getAlbumIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
  }

  // Obtener y mostrar los detalles del álbum
  getAlbumDetails(albumId);

  async function getAlbumDetails(albumId) {
    try {
      const response = await axios.get(`http://localhost:5000/albums/${albumId}`);
      const album = response.data;

      // Llenar el formulario con los detalles del álbum
      document.getElementById('albumTitle').value = album.nombreAlbum;
      document.getElementById('lanzamiento').value = album.lanzamiento;
      document.getElementById('descripcion').value = album.descripcion;
      document.getElementById('imagenAlbum').value = album.imagen;

    } catch (error) {
      console.error('Error fetching album details:', error);
      alert('Error fetching album details. Please try again later.');
    }
  }

  // Manejar la edición del álbum
  editAlbumForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    const nombreAlbum = document.getElementById('albumTitle').value;
    const albumLanzamiento = document.getElementById('lanzamiento').value;
    const albumDescripcion = document.getElementById('descripcion').value;
    const albumImagen = document.getElementById('imagenAlbum').value;

    try {
      const response = await axios.put(`http://localhost:5000/albums/${albumId}`, {
        nombreAlbum: nombreAlbum,
        lanzamiento: albumLanzamiento,
        descripcion: albumDescripcion,
        imagen: albumImagen
      });

      console.log('Album updated successfully:', response.data);
      alert('Album updated successfully!');
    } catch (error) {
      console.error('Error updating album:', error);
      alert('Error updating album. Please try again later.');
    }
  });

  // Manejar la eliminación del álbum
  deleteAlbumBtn.addEventListener('click', async function () {
    if (confirm('¿Estás seguro de que deseas eliminar este álbum?')) {
      try {
        const response = await axios.delete(`http://localhost:5000/albums/${albumId}`);
        console.log('Album deleted successfully:', response.data);
        alert('Album deleted successfully!');
        window.location.href = 'index.html'; // Redirigir a la página principal después de eliminar
      } catch (error) {
        console.error('Error deleting album:', error);
        alert('Error deleting album. Please try again later.');
      }
    }
  });

  // Manejar la cancelación de cambios
  cancelarCambiosBtn.addEventListener('click', function () {
    window.location.href = 'index.html'; // Redirigir a la página principal
  });
});
