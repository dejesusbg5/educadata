$(document).ready(function () {
  const id = new URL(window.location.href).searchParams.get("id_grado");
  localStorage.setItem("id_grado", id);

  const nombre = new URL(window.location.href).searchParams.get("nombre_grado");
  localStorage.setItem("nombre_grado", nombre);

  $("#nombre-grado").text(nombre);
});


