/* Se requiere determinar el tiempo que tarda una persona en llegar de
una ciudad a otra en bicicleta, considerando que lleva una velocidad
constante. Realice un diagrama de flujo y pseudocódigo que representen 
el algoritmo para tal fin.*/

let velocidad;
let tiempo;
let distancia;
 

distancia=  prompt("Ingrese la distancia que hay de una ciudad a otra");

velocidad = prompt("Ingrese la velocidad ");

tiempo = (distancia/velocidad);


alert(`El tiempo que se toma en bicicleta de una ciudad a otra es ${tiempo}`);


