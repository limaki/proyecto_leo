
// javascript-----ejercicio
// let nombre = prompt ("ingrese su nombre");
// let edad = prompt ("ingrese su edad");
// alert("Hola "  + nombre+ " de " +edad+ " años," + " te interesaría adquirir tickects ?" );

// dom
// let nombre = prompt("Cuál es tu nombre?").toUpperCase();
// const span = document.querySelector("#welcome");

// if (nombre.length <2) {
//   nombre = prompt("Demasiado corto, dinos, cuál es realmente tu nombre?");
//   } else {(nombre.length =0);
//   alert ("debe completar su nombre");
// }

// span.textContent = "Hola, " + nombre;

// ejer loops and while

// ejer objetos

let tickets = {
    "Madrid":3,
    "Barcelona":4,
    "Lisboa":3,
    "Roma":1,
    "Paris":2,
 }


//  eje funciones

function saludar(){
    swal("Bienvenido a la seccion de tour y fechas!!!", nombre, "success");
  }
  
  function getTickets(ciudad) {
    while (tickets[ciudad] > 0) {
      swal("Comprado!", "Tienes 1 entrada para el concierto de " + ciudad + 
      " ", "success");
      tickets[ciudad]--;  
      disableSoldOutButtons()
      return; 
     }
     swal(
      "SOLD OUT!",
      "¡Se te acabó la suerte!, no quedan más entradas para el concierto de " + 
      ciudad, "info",)
    }
      
  
  
  
   function disableSoldOutButtons(){
    for (let ciudad in tickets) {
      if (tickets[ciudad] === 0) {
          let boton = document.getElementById(ciudad.replace(/\s+/g, ''));
          if (boton) {
              boton.textContent = "Agotado";
              boton.style.backgroundColor= "red"
          }
      }
  }
  }

  function edadUsuario(){
    let edad = parseInt(prompt("Ingrese su edad"))
    if(edad <18){
      swal("Menor de Edad", "No podes comprar Entrada", "error")
      let todosLosBotones = document.querySelectorAll("button")
      for (let i = 0; i < todosLosBotones.length; i++) {
        todosLosBotones[i].style.backgroundColor= "grey"
        todosLosBotones[i].disabled = true
        todosLosBotones[i].textContent = "Bloqueado"
        }
      
    }else{
      saludar()
    }
  
    
   }
  




  let nombre = prompt("Cuál es tu nombre?").toUpperCase();


while (nombre.length < 3) {
  nombre = prompt(
    "Mmmm, tu nombre no puede ser tan corto, ingresa al menos 3 letras",
  ).toUpperCase();
}
const span = document.getElementById("welcome");
span.textContent = ` Hola, ${nombre}`;
const i = document.querySelector("i");
i.setAttribute("class", "fa-ticket fa-solid fa-ticket fa-lg ");

edadUsuario()


gi