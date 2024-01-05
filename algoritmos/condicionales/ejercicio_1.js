/*Realice un algoritmo para determinar si una persona puede votar
con base en su edad en las próximas elecciones. Construya el diagrama 
de flujo, el pseudocódigo y el diagrama N/S.*/

let edad = prompt('Ingrese edad');

if (edad >= 18) {
    alert('Usted es mayor de edad, puede votar');
} else {
    alert('No cumple con la edad requerida para votar');
}