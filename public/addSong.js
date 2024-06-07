
    document.addEventListener('DOMContentLoaded', function () {
        let boton = document.getElementById("guardarBtn");
    
        boton.addEventListener('click', async function (e) {
            e.preventDefault();
    
            // Obtener los valores del formulario
            let titulo = document.getElementById("nombreCancion").value;
            let duracion = document.getElementById("duracion").value;
            let youtubeLink = document.getElementById("linkY").value;
    
            // Obtener el ID del álbum de la URL
            const urlParams = new URLSearchParams(window.location.search);
            const albumId = urlParams.get('id');
    
            // Verificar que el ID del álbum se está capturando correctamente
            console.log('ID del álbum:', albumId);
    
            if (!albumId) {
                console.error('No se encontró el ID del álbum en la URL');
                return;
            }
    
            console.log('Datos a enviar:', { titulo, duracion, youtubeLink });
    
            try {
                // Enviar los datos al servidor
                const response = await axios.post(`http://localhost:5000/albums/${albumId}/canciones`, {
                    titulo,
                    duracion,
                    youtubeLink
                });
                const nuevaCancion = response.data;
    
                if (nuevaCancion) {
                    swal({
                        title: 'Canción Creada!!',
                        text: 'Has subido la canción correctamente.',
                        icon: 'success',
                        confirmButtonText: 'ok',
                    }).then(() => {
                        window.location.href = `./album.html?id=${albumId}`;
                    });
                } else {
                    console.error('No se recibió la canción del servidor');
                }
            } catch (error) {
                console.error("Error en la solicitud:", error);
            }
        });
    });
     