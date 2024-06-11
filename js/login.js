$(document).ready(function() {
    // Función para enviar el formulario de edición de usuario al backend
    const enviarFormularioLogin = () => {
      // Obtener los datos del formulario
      let formData = $("#login-form").serializeObj();
      console.log(formData);

      // Enviar los datos al backend
      $.ajax({
        url: 'http://127.0.0.1:8080/api/v1/login', // Reemplaza esto con la URL correcta de tu backend
        method: 'POST', // Utiliza el método HTTP correspondiente (PUT, POST, etc.)
        contentType: 'application/json',
        data: JSON.stringify(formData),
        success: function(response) {
          console.log('Usuario ingresado exitosamente:', response);

          if (response != ""){
            switch($("[name='tipo']").val()){
              case "1":
                window.location.href = './st-home.html';
                break;
              case "2":
                window.location.href = './tc-home.html';
                break;
              case "3":
                window.location.href = './ad-home.html';
                break;
            }
            
            localStorage.setItem("id_usuario", JSON.stringify(response));
            localStorage.setItem("tipo", $("[name='tipo']").val());
        } else {
            openDialog("invalid-credentials");
          }
          // Aquí puedes realizar cualquier acción adicional después de editar el usuario
        },
        error: function(error) {
          console.error('Error al ingresar usuario:', error);
        }
      });
    };
  
  
    // Manejar el evento submit del formulario
    $('#login-form').submit(function(event) {
      event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
      enviarFormularioLogin(); // Llamar a la función para enviar el formulario de edición
    });
  });
  