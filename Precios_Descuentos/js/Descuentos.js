

function calcularDProducto(porcentaje, precioOriginal) {
   

    const descuentoTotalPorcentaje = (100 - porcentaje )
    return pagoT = (precioOriginal * descuentoTotalPorcentaje  ) / 100;

    
}

function mostrar() {
    const porcentaje = document.getElementById('porcentaje').value ;
    const precioOriginal = document.getElementById('precioP').value;

    const pago = calcularDProducto (porcentaje, precioOriginal) ;

    const resultado = document.getElementById('resultado')
    resultado.innerText = `El resultado de precio con descuento es : $  ${pago}`;
    
}
