function enviarAlerta() {
  alert("Hola mundo");
}

let contenido = "Hola";
function cambiarTexto() {
  contenido = contenido + "mundo";
  let parrafo = document.getElementById("parrafo");
  parrafo.textContent = contenido;
}

function cambiarTexto2() {
  let parrafo = document.getElementById("parrafo2");
  parrafo.innerHTML =
    "<ul> <li>Elemento 1</li> <li>Elemento 2</li> <li>Elemento 3</> </ul>";
}

let elemento1 = "MinTic";
let elemento2 = "MinEdu";
let elemento3 = "Otro";
function cambiarTexto3() {
  let parrafo = document.getElementById("parrafo3");
  parrafo.innerHTML = `<ul><li>${elemento1}</li> <li>${elemento2}</li><li>${lemento3}</></ul>`;
}

function mostrarMenu(){
  let menu = document.getElementById("menu");
  menu.classList.toggle("hiden");
}

function validarFormulario(){
  let nombre = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let telefono = document.getElementById("phone").value;

  if(nombre === "" || email === "" || telefono === ""){
    alert("Todos los campos son obligatorios");    
  } else {
    alert("Formulario enviado");
  }
}

function incrementarContador(){
  let contador = document.getElementById("contador");
  let contadorNumero = parseInt(contador.textContent);
  contadorNumero++;
  contador.textContent = contadorNumero;
}

function decrementarContador(){
  let contador = document.getElementById("contador");
  let contadorNumero = parseInt(contador.textContent);
  contadorNumero--;
  contador.textContent = contadorNumero;
}