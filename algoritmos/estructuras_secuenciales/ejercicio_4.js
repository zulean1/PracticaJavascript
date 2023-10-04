/*Pinturas “La brocha gorda” requiere determinar cuánto cobrar por
trabajos de pintura. Considere que se cobra por m2 y realice un 
diagrama de flujo y pseudocódigo que representen el algoritmo que le
permita ir generando presupuestos para cada cliente*/

const price = 3;
let m2 = null;

alert(`El precio del metro cuadrado sale en ${price}$`);

m2= prompt('Ingrese cuanto metros cuadrados desea pintar');

let result = (price * m2);

alert(`El total a pagar por pintar es : ${result}$`);
