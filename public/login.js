/*function validarFormulario() {
  // Obtener los valores de los campos del formulario
  console.log("Validando formulario...");
  const mail = document.getElementById("input").value.trim();
 //const pass = document.getElementById("pass").value.trim();
 
  // Verificar si alguno de los campos está vacío
if (input === '' ) {
      // Mostrar alerta con SweetAlert si algún campo está vacío
      swal("Oops!", "Por favor, completa todos los campos.", "warning");
      return true; // Evitar que el formulario se envíe
  }

  // Si todos los campos están completos, se envía el formulario
  return false;
}*/

// Función para validar campos vacíos
function validarCamposVacios() {
  let inputs = document.querySelectorAll('input'); // Selecciona todos los campos de entrada

  for (const input of inputs) {
      if (input.value.trim() === '') {
          return false; // Si algún campo está vacío, retorna false
      }
  }

  return true; // Todos los campos están llenos
}

// Función para manejar el envío del formulario
function enviarFormulario(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    if (validarCamposVacios()) {
        // Todos los campos están llenos, puedes procesar los datos aquí
        // Por ejemplo, puedes enviar una solicitud al servidor o realizar otras acciones
        console.log('Formulario válido. Datos procesados correctamente.');
    } else {
        // Al menos un campo está vacío, muestra una alerta
        swal('Error', 'No pueden haber campos vacíos', 'error');
    }
}

// Asigna la función al evento de envío del formulario
const formulario = document.querySelector('form');
formulario.addEventListener('submit', enviarFormulario);
