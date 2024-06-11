$(document).ready(function () {
  // Función para enviar el formulario de edición de usuario al backend
  const traerDatosGrupos = () => {
    // Obtener los datos del formulario
    const id = parseInt(localStorage.getItem("id_usuario"));

    // Enviar los datos al backend
    $.ajax({
      url: 'http://127.0.0.1:8080/api/v1/docentes_de_grado/' + id, // Reemplaza esto con la URL correcta de tu backend
      method: 'GET', // Utiliza el método HTTP correspondiente (PUT, POST, etc.)
      contentType: 'application/json',
      success: function (response) {
        const groups = $("#groups");

        console.log('Home exitosamente:', response["docentesDeGrado"]);

        $.each(response["docentesDeGrado"], (index, grupo) => {
          const nombre = grupo.idGrado.nombre + " " + grupo.idGrado.codigo;

          const card = `
            <div class="md3-card md3-card--filled"  onclick="window.location = './tc-group.html?id_grado=${grupo.idGrado.idGrado}&nombre_grado=${nombre}'">
              <span class="md3-card__headline">${nombre}</span>
            </div>
          `;

          groups.append(card);
        })
        // Aquí puedes realizar cualquier acción adicional después de editar el usuario
      },
      error: function (error) {
        console.error('Error al home:', error);
      }
    });
  };

  // Manejar el evento submit del formulario
  traerDatosGrupos(); // Llamar a la función para enviar el formulario de edición
});


