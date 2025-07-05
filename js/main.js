document.addEventListener("DOMContentLoaded", () => {
  const enlaces = document.querySelectorAll(".menu a");

  enlaces.forEach(link => {
    link.addEventListener("click", function () {
      enlaces.forEach(l => l.classList.remove("activo")); // quita a todos
      this.classList.add("activo");                       // pone al clicado
    });
  });
});