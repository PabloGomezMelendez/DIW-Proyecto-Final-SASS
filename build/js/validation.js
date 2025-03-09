//VALIDAR FORMULARIO
(() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

//VALIDAD USUARIO
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    if (username === "admin" && password === "admin123") {
        window.location.href = "incidencias.html";
    } else {
        window.location.href = "registro.html";
    }
});

//VALIDAR BOTON ESTADO
function cambiarEstado(boton) {
  if (boton.innerText === "Pendiente") {
      boton.innerText = "Resuelto";
      boton.classList.remove("btn-danger");
      boton.classList.add("btn-success");
  } else {
      boton.innerText = "Pendiente";
      boton.classList.remove("btn-success");
      boton.classList.add("btn-danger");
  }
}