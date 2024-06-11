var estudiantes = []; // Mover la declaración de la variable fuera de la función

// Añadir compatibilidad con backend
$(document).ready(function () {
  // Función para obtener y mostrar la lista de estudiantes
  const fetchUsuarios = async () => {
    $.each(["http://127.0.0.1:8080/api/v1/docentes", "http://127.0.0.1:8080/api/v1/estudiantes"], (index, url) => {
      $.ajax({
        url: url,
        method: "GET",
        success: function (response) {
          if (response && (Array.isArray(response.estudiantes) || Array.isArray(response.docentes))) {
            renderUsuarios(response.estudiantes ?? response.docentes);
          } else {
            console.error("La respuesta del servidor no está en el formato esperado.");
          }
        },
        error: function (error) {
          console.error("Error fetching estudiantes:", error);
        },
      });
    });
  };

  // Función para renderizar la lista de estudiantes en el DOM
  const renderUsuarios = (usuario) => {
    const listContainer = $("#list");

    usuario.forEach((usuario) => {
    //   let subhead = usuario.idGrado != null ? usuario.idGrado.nombre + " - " + usuario.idGrado.codigo : "";
      let subhead = usuario.idGrado != null ? "Estudiante" : "Docente";
      let idUsuario = usuario.idEstudiante ?? usuario.idDocente;

      const usuarioCard = `
        <div class="md3-card md3-card--outlined" onclick="window.location = './ad-edit.html?id=${idUsuario}'">
          <img class="md3-card__media" src="./img/user.png" alt="User picture" />
          <span class="md3-card__headline">${usuario.nombres} ${usuario.apellidos}</span>
          <span class="md3-card__subhead">${subhead}</span>
        </div>
      `;
      listContainer.append(usuarioCard);
    });
  };

  // Llamar a la función para obtener estudiantes cuando la página esté lista
  fetchUsuarios();
});