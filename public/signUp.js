

document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const mail = document.getElementById('mail').value;
    const pass = document.getElementById('pass').value;

    try {
        const response = await axios.post('https://chayanne.onrender.com/users', {
            nombre,
            apellido,
            mail,
            pass
        });
        alert('Usuario registrado correctamente');
        window.location.href = 'login.html'; // Redirigir al login después de registrarse
    } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
            alert('Error registrando usuario: ' + error.response.data.error);
        } else {
            alert('Error registrando usuario: ' + error.message);
        }
    }
});


