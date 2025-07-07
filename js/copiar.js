function copiarCodigo(id) {
  const texto = document.getElementById(id).textContent;
  navigator.clipboard.writeText(texto)
    .catch(() => alert("Error al copiar"));
}