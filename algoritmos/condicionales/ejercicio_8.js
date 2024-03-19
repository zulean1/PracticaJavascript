/*Cierta empresa proporciona un bono mensual a sus trabajadores, el
cual puede ser por su antigüedad o bien por el monto de su sueldo
(el que sea mayor), de la siguiente forma:
Cuando la antigüedad es mayor a 2 años pero menor a 5, se otorga
20 % de su sueldo; cuando es de 5 años o más, 30 %. Ahora bien, el
bono por concepto de sueldo, si éste es menor a $1000, se da 25 %
de éste, cuando éste es mayor a $1000, pero menor o igual a $3500,
se otorga 15% de su sueldo, para más de $3500. 10%. Realice el
algoritmo correspondiente para calcular los dos tipos de bono, 
asignando el mayor, y represéntelo con un diagrama de flujo y pseudocódigo*/



let antiguedad = parseInt(prompt('Ingrese año de antiguedad')) ;
let  sueldo_base = parseInt(prompt('Ingrese sueldo'));

/*Por antiguedad*/

if (antiguedad >= 2 && antiguedad <= 5  ) {
    let bono = sueldo_base * 0.20;
    let sueldo_total = sueldo_base + bono;
     console.log(sueldo_total);
} 

else if (antiguedad > 5 ) {
    let bono = sueldo_base * 0.30;
    let sueldo_total = sueldo_base + bono;
     console.log(sueldo_total);
} 
else {
    console.log('No cumple')
} 

/*Por Sueldo*/

if (sueldo_base < 1000 && sueldo_base >= 500  ) {
    let bono = sueldo_base * 0.25;
    let sueldo_total = sueldo_base + bono;
     console.log(sueldo_total);
} 

else if (sueldo_base >= 1000 && sueldo_base <= 3500 ) {
    let bono = sueldo_base * 0.15;
    let sueldo_total = sueldo_base + bono;
     console.log(sueldo_total);
} 

else if (sueldo_base > 3500 ) {
    let bono = sueldo_base * 0.10;
    let sueldo_total = sueldo_base + bono;
     console.log(sueldo_total);
}
else {
    console.log('No cumple')
}
