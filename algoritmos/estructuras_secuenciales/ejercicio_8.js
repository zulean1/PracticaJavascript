/* Realice un diagrama de flujo y pseudocódigo que representen el
algoritmo para determinar cuánto pagará finalmente una persona
por un artículo equis, considerando que tiene un descuento de 20%,
y debe pagar 15% de IVA*/



let price_origin = prompt("Ingrese el precio del producto");

let porcentaje = prompt("Ingrese el porcentaje");

let IVA = prompt("Ingrese el IVA");

const descuentoTotalPorcentaje = (100 - porcentaje )
let pagoT = (price_origin * descuentoTotalPorcentaje  ) / 100;

const ivaTotal = (IVA / 100);

let price_product = (pagoT * ivaTotal  ) + pagoT;

console.log(price_product);








