$(document).ready(function() {
    // Función para enviar el formulario de edición de usuario al backend
    const enviarFormularioEdicion = () => {
      // Obtener los datos del formulario
      let formData = $("#edit-form").serializeObj();
  
      const id = new URL(window.location.href).searchParams.get("id");
      console.log(formData);

      // Enviar los datos al backend
      $.ajax({
        url: 'http://127.0.0.1:8080/api/v1/estudiantes/' + id, // Reemplaza esto con la URL correcta de tu backend
        method: 'PUT', // Utiliza el método HTTP correspondiente (PUT, POST, etc.)
        contentType: 'application/json',
        data: JSON.stringify(formData),
        success: function(response) {
          console.log('Usuario editado exitosamente:', response);
          // Aquí puedes realizar cualquier acción adicional después de editar el usuario
        },
        error: function(error) {
          console.error('Error al editar usuario:', error);
        }
      });
    };
  
    // Manejar el evento submit del formulario
    $('#edit-form').submit(function(event) {
      event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
      enviarFormularioEdicion(); // Llamar a la función para enviar el formulario de edición
    });
  });
  