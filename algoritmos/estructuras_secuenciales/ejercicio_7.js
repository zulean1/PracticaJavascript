/* La CONAGUA requiere determinar el pago que debe realizar una
persona por el total de metros cúbicos que consume de agua. .*/

let metros_cubicos;
let largo;
let ancho;
let alto;
const price_metros = 3;

alert(`Advertencia , el precio del metro cubico es de ${price_metros}$`);

largo = prompt("Indique el largo");
ancho = prompt("Indique el ancho");
alto = prompt("Indique el alto");

metros_cubicos = (largo * ancho * alto);
let price_total = price_metros * metros_cubicos;

alert(`Usted ha consumido la cantidad de ${metros_cubicos}. Su total a pagar es ${price_total}`);