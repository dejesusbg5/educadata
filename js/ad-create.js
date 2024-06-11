$(document).ready(function() {
    // Función para enviar el formulario de edición de usuario al backend
    const enviarFormularioEdicion = () => {
      // Obtener los datos del formulario
      let formData = $("#edit-form").serializeObj();

      let url = "http://127.0.0.1:8080/api/v1/";

      switch(formData.rol){
        case "1":
          url += "estudiantes";
          break;
        case "2":
          url += "docentes";
          break;
        case "3":
          url += "admins";
          break;
      }

      formData.rol = null;

      // Enviar los datos al backend
      $.ajax({
        url: url, // Reemplaza esto con la URL correcta de tu backend
        method: 'POST', // Utiliza el método HTTP correspondiente (PUT, POST, etc.)
        contentType: 'application/json',
        data: JSON.stringify(formData),
        success: function(response) {
          console.log('Usuario creado exitosamente:', response);
          // Aquí puedes realizar cualquier acción adicional después de editar el usuario
        },
        error: function(error) {
          console.error('Error al crear usuario:', error);
        }
      });
    };
  
    // Manejar el evento submit del formulario
    $('#edit-form').submit(function(event) {
      event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
      enviarFormularioEdicion(); // Llamar a la función para enviar el formulario de edición
    });
  });
  