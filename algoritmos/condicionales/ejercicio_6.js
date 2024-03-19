/*Realice el diagrama de flujo, el pseudocódigo y el diagrama N/S que
muestren el algoritmo para determinar el costo y el descuento que
tendrá un artículo. Considere que si su precio es mayor o igual a
$200 se le aplica un descuento de 15%, y si su precio es mayor a $100
pero menor a $200, el descuento es de 12%, y si es menor a $100,
sólo 10%.*/


let precio = prompt('Ingrese el precio de producto');


if (precio >= 200) {

    let descuento = precio * 0.15;
    let descuentot = precio - descuento;
    console.log(`Su producto vale ${precio} y lleva un descuento de ${descuentot}`);

} 
else if(precio >= 100){
   
    let descuento = precio * 0.12;
    let descuentot = precio - descuento;
   console.log(`Su producto vale ${precio} y lleva un descuento de ${descuentot}`);
}

else if(precio < 100 && precio > 10){
   
    let descuento = precio * 0.10;
    let descuentot = precio - descuento;
   console.log(`Su producto vale ${precio} y lleva un descuento de ${descuentot}`);
}

else {
    console.log("No hay descuento");
}