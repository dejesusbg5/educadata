var estudiantes = []; // Mover la declaración de la variable fuera de la función

// Añadir compatibilidad con backend
$(document).ready(function () {
  const id_grado = parseInt(localStorage.getItem("id_grado"));

  // Función para obtener y mostrar la lista de estudiantes
  const fetchUsuarios = async () => {
    $.ajax({
      url: "http://127.0.0.1:8080/api/v1/estudiantes/list/" + id_grado,
      method: "GET",
      success: function (response) {
        if (response && Array.isArray(response.estudiante)) {
          renderUsuarios(response.estudiante);
        } else {
          console.error("La respuesta del servidor no está en el formato esperado.");
        }
      },
      error: function (error) {
        console.error("Error fetching estudiantes:", error);
      },
    });
  };

  // Función para renderizar la lista de estudiantes en el DOM
  const renderUsuarios = (usuario) => {
    const listContainer = $("#list");
    listContainer.empty(); // Limpiar el contenedor de la lista

    usuario.forEach((usuario) => {
      let idUsuario = usuario.idEstudiante ?? usuario.idDocente;

      const usuarioCard = `
        <div class="md3-card md3-card--outlined">
          <img class="md3-card__media" src="./img/user.png" alt="User picture" />
          <span class="md3-card__headline">${usuario.nombres} ${usuario.apellidos}</span>
          <span class="md3-card__subhead">${parseInt(Math.random() * 5)} fallas</span>
        </div>
      `;

      listContainer.append(usuarioCard);
    });
  };

  const nombre_grado = localStorage.getItem("nombre_grado");
  $("#nombre-grado").text(nombre_grado);
  // Llamar a la función para obtener estudiantes cuando la página esté lista
  fetchUsuarios();
});