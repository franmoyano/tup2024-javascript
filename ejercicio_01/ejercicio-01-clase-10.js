// Ejercicio 01 - Calcular estación del año
// Este algoritmo pide datos por pantalla, si se abre el archivo html desde
// un navegador

let mes;
let estacion;

do {
  mes = prompt("Ingrese un número de mes (entre 1 y 12");
} while (isNaN(mes) || mes < 1 || mes > 12);

console.log(`Mes ingresado: ${mes}`);

if (mes == 1 || mes == 2 || mes == 12) {
  estacion = "Verano";
} else if (mes == 3 || mes == 4 || mes == 5) {
  estacion = "Otoño";
} else if (mes == 6 || mes == 7 || mes == 8) {
  estacion = "Invierno";
} else {
  estacion = "Primavera";
}

console.log(`Estación: ${estacion}`);
alert(`Estación: ${estacion}`);