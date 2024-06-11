
document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const mail = document.getElementById('mail').value;
    const pass = document.getElementById('pass').value;

    try {
        const response = await axios.post('http://localhost:5000/users/login', {
            mail,
            pass
        });

        if (response && response.data && response.data.token) {
            const token = response.data.token;
            localStorage.setItem('token', token);
            alert('Inicio de sesión exitoso');
            window.location.href = 'https://chayanne.onrender.com/index.html'; // Redirigir a la página principal después de iniciar sesión
        } else {
            alert('Error al iniciar sesión: Respuesta incorrecta del servidor');
        }
    } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
            alert('Error al iniciar sesión: ' + error.response.data.error);
        } else {
            alert('Error al iniciar sesión: Respuesta incorrecta del servidor');
        }
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const token = localStorage.getItem('token');
    if (token) {
        window.location.href = 'https://chayanne.onrender.com/index.html';
    }})

