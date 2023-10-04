/*Se requiere determinar la hipotenusa de un triángulo rectángulo.
¿Cómo sería el diagrama de flujo y el pseudocódigo que representen
el algoritmo para obtenerla? Recuerde que por Pitágoras se tiene
que: C2= A2+ B2*/

let lado_1;
let lado_2;
let hipotenusa;

lado_1 = prompt('Ingrese el primer lado del triangulo');
lado_2 = prompt('Ingrese el segundo lado del triangulo');

hipotenusa = Math.sqrt(lado_1**2 + lado_2**2) ;

alert(hipotenusa);

