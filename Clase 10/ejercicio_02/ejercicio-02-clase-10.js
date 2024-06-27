// Ejercicio 02 - Hora del día

/*
  - de 6 a 11 dice: Buenos días
  - de 12 a 19 dice: Buenas tardes
  - de 20 a 23 dice: Buenas noches
  - de 24 a 5 dice: Que descanses
*/

let hora = 7;
let mensaje;

if (hora >= 6 && hora <= 11) {
  mensaje = "Buenos días";
} else if (hora >= 12 && hora <= 19) {
  mensaje = "Buenas tardes";
} else if (hora >= 20 && hora <= 23) {
  mensaje = "Buenas noches";
} else if (hora == 24 || (hora >= 0 && hora <= 5)) {
  mensaje = "Que descanses";
}

if (mensaje) {
  console.log(mensaje);
} else {
  console.log("Valor incorrecto");
}
