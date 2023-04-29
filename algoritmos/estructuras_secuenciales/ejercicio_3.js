/*Un estacionamiento requiere determinar el cobro que debe aplicar a
las personas que lo utilizan. Considere que el cobro es con base en las
horas que lo disponen y que las fracciones de hora se toman como
completas y realice un diagrama de flujo y pseudocódigo que representen 
el algoritmo que permita determinar el cobro
.*/

let hours = prompt("Ingresa el valor una hora de estacionamiento");
let hours_parked = prompt("Ingresa el tiempo utilizado en el estacionamiento");


let charge = hours * hours_parked;


alert("El cobro por las horas es : " + charge);