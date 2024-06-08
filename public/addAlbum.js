


        let boton = document.getElementById("guardarBtn");
        // Obtener los valores del formulario
        let nombreAlbum = document.getElementById("album");
        let datoFecha = document.getElementById("lanzamiento");
        let datoDescripcion = document.getElementById("descripcion");
        let datoImg = document.getElementById("imagenAlbum");

        boton.addEventListener('click', async function(e) {
            e.preventDefault();
           // document.getElementById("addAlbumForm").addEventListener("submit", function(event) {
               // event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional
try{

        // Enviar los datos al servidor
        const response = await axios.post("http://localhost:5000/albums/", {
            nombreAlbum: nombreAlbum.value,
            lanzamiento: datoFecha.value,
            descripcion: datoDescripcion.value,
            imagen: datoImg.value,
            canciones:[]
        });
        const albumId = response.data.id;
        console.log(respuesta.data)
        if (albumId){
            swal ( {
                title: 'Album Creado!!',
                text: 'Has creado el album correctamente.',
                icon: 'success',
                confirmButtonText: 'ok',
            })
        
        .then(() => {
            window.location.href = `./album.html?album=${albumId}`;
        })
            console.log(respuesta.data);
    } else {
        console.error ('No se recibio el id del album del servidor');
    }
            // Aquí podrías mostrar una notificación o redirigir al usuario después de guardar los datos
        } catch(error) {
           // console.error("error en la solicitud:", error);
        }
            // Manejar errores, mostrar un mensaje al usuario, etc.
    })