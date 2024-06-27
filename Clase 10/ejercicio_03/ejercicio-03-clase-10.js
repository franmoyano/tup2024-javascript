// Ejercicio 03 - Calcular estación del año - con Switch

let mes;
let estacion;

// Con este ciclo me aseguro que el valor se encuentre en el rango esperado
do {
  mes = prompt("Ingrese un número de mes (entre 1 y 12");
} while (isNaN(mes) || mes < 1 || mes > 12);

console.log(`Mes ingresado: ${mes}`);

mes = Number(mes)

switch (mes) {
  case 1:
  case 2:
  case 12:
    estacion = "Verano";
    break;
  case 3:
  case 4:
  case 5:
    estacion = "Otoño";
    break;
  case 6:
  case 7:
  case 8:
    estacion = "Invierno";
    break;
  // al haber filtrado previamente los posibles números de input,
  // tengo certeza de que "default" sólo podría ser 9, 10 u 11
  default:
    estacion = "Primavera";
}

console.log(`Estación: ${estacion}`);
alert(`Estación: ${estacion}`);
