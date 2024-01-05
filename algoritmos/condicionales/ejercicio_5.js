/*Se tiene el nombre y la edad de tres personas. Se desea saber el nombre y la edad de la persona de menor edad. 
Realice el algoritmo correspondiente y represéntelo 
con un diagrama de flujo, pseudocódigo y diagrama N/S.*/


let name1 = prompt('Ingresa tu nombre');
let age1 = prompt('Ingrese su edad');

let name2 = prompt('Ingresa tu nombre');
let age2 = prompt('Ingrese su edad');

let name3 = prompt('Ingresa tu nombre');
let age3 = prompt('Ingrese su edad');



if (age1 < age2 && age1 < age3) {
    console.log(`El menor es ${name1} porque tiene ${age1}`);
    
} 

else if (age2 < age1 && age2 < age3) {
    console.log(`El menor es ${name2} porque tiene ${age2}`);
    
} 

else {
    console.log(`El menor es ${name3} porque tiene ${age3}`);
}

