$(document).ready(function () {
  // Función para enviar el formulario de edición de usuario al backend
  const traerDatosGrupos = () => {
    // Obtener los datos del formulario
    const id_grado = localStorage.getItem("id_grado");

    // Enviar los datos al backend
    $.ajax({
      url: 'http://127.0.0.1:8080/api/v1/actividades/materia/prom/' + id_grado, // Reemplaza esto con la URL correcta de tu backend
      method: 'GET', // Utiliza el método HTTP correspondiente (PUT, POST, etc.)
      contentType: 'application/json',
      success: function (response) {
        const tabla = $("#notas-table > tbody");

        console.log('Home exitosamente:', response["actividades"]);

        var max = 0;

        $.each(response["actividades"], (key, value) => {
          console.log(key, value)
          max = (max < value) ? value : max;
        })

        $.each(response["actividades"], (key, value) => {
          const row = `
            <tr>
              <th scope="row">${key}</th>
              <td style="--size: calc(${value} / ${max})"><span class="data">${value}</span></td>
            </tr>
          `;

          tabla.append(row);
        })
      },
      error: function (error) {
        console.error('Error al home:', error);
      }
    });
  };

  // Manejar el evento submit del formulario
  traerDatosGrupos(); // Llamar a la función para enviar el formulario de edición
});


