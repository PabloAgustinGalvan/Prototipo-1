document.addEventListener("DOMContentLoaded", () => {
  const enlaces = document.querySelectorAll(".menu a");

  enlaces.forEach(link => {
    link.addEventListener("click", function () {
      enlaces.forEach(l => l.classList.remove("activo")); // quita a todos
      this.classList.add("activo");                       // pone al clicado
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector("#menu-toggle");
  const navContenido = document.querySelector(".nav-contenido");

  toggle.addEventListener("click", function () {
    navContenido.classList.toggle("menu-abierto");
  });
});