$(document).ready(function () {
  // Función para enviar el formulario de edición de usuario al backend
  const traerDatosGrupos = () => {
    // Obtener los datos del formulario
    const id_grado = localStorage.getItem("id_grado");

    // Enviar los datos al backend
    $.ajax({
      url: 'http://127.0.0.1:8080/api/v1/temas/grado/' + id_grado, // Reemplaza esto con la URL correcta de tu backend
      method: 'GET', // Utiliza el método HTTP correspondiente (PUT, POST, etc.)
      contentType: 'application/json',
      success: function (response) {
        const groups = $("#groups");

        console.log('Home exitosamente:', response["temas"]);

        $.each(response["temas"], (index, tema) => {
          const card = `
            <div class="md3-card md3-card--outlined">
              <span class="md3-card__headline">${tema.nombre}</span>
              <span class="md3-card__subhead">${tema.idMateria.nombre}</span>
              <span class="md3-card__text">${tema.descripcion}</span>
            </div>
          `;

          $("#nombre-grado").text(tema.idGrado.nombre + " " + tema.idGrado.codigo);

          groups.prepend(card);
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


