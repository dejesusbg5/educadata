$(document).ready(function () {
  // Función para enviar el formulario de edición de usuario al backend
  const traerDatosGrupos = () => {
    // Obtener los datos del formulario
    const id_grado = localStorage.getItem("id_grado");

    // Enviar los datos al backend
    $.ajax({
      url: 'http://127.0.0.1:8080/api/v1/actividades/grado/' + id_grado, // Reemplaza esto con la URL correcta de tu backend
      method: 'GET', // Utiliza el método HTTP correspondiente (PUT, POST, etc.)
      contentType: 'application/json',
      success: function (response) {
        const tasks = $("#tasks");

        console.log('Home exitosamente:', response["actividad"]);

        $.each(response["actividad"], (index, tarea) => {
          const card = `
            <div class="md3-card md3-card--outlined">
              <span class="md3-card__headline">${tarea.titulo} - / ${tarea.nota}</span>
              <span class="md3-card__subhead">${tarea.idMateria.nombre}</span>
              <span class="md3-card__text">${tarea.descripcion}</br>(${tarea.estado})</span>
            </div>
          `;

          $("#nombre-grado").text(tarea.idGrado.nombre + " " + tarea.idGrado.codigo);

          tasks.append(card);
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


