// Función para alternar colores cada cierto tiempo
myInterval = setInterval(setColor, 500);

function setColor() {
  let x = document.body;
// El signo de interrogación es un operador condicional, cuando es rosado se cambia a amarillo (creemos)
  x.style.backgroundColor = x.style.backgroundColor == "lightpink" ? "lemonchiffon" : "lightpink" ;
}

function stopColor() {
  clearInterval(myInterval);
}
// Caja de texto que pregunta cómo te llamas
let nombre = prompt("¡Hola! ¿Cuál es tu nombre?");
// Responde a la usuaria escribiendo bienvenida
document.write("Bienvenida, " + nombre);
