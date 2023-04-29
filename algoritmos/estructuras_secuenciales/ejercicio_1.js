/*Una empresa importadora desea determinar cuántos dólares puede
adquirir con equis cantidad de dinero mexicano. Realice un diagrama
de flujo y pseudocódigo que representen el algoritmo para tal fin.*/

let dolar ;
let mexicano;


mexicano = prompt("Ingrese la cantidad de pesos MXN que desea convertir");
dolar = prompt("Ingrese valor del Dolar en Peso");

let conversion = mexicano / dolar;

console.log(conversion);