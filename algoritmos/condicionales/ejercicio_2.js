/*Realice un algoritmo para determinar el sueldo semanal de un trabajador con base 
en las horas trabajadas y el pago por hora,considerando que después de
las 40 horas cada hora se considera como excedente y se paga el doble*/

let hours = prompt('Ingrese horas trabajadas ');

let pagoh = prompt('Ingrese pago por horas trabajadas');

if (hours >= 40) { 
    pagot = hours * pagoh * 2;
    alert(`Su pago es ${pagot}`);
    
} else {
    pagot = hours * pagoh;
    alert(`Su pago es ${pagot}`);
}