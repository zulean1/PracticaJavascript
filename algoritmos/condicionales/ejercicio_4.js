/*El dueño de un estacionamiento requiere un diagrama de flujo con
el algoritmo que le permita determinar cuánto debe cobrar por el
uso del estacionamiento a sus clientes. Las tarifas que se tienen son
las siguientes:
Las dos primeras horas a $5.00 c/u.
Las siguientes tres a $4.00 c/u.
Las cinco siguientes a $3.00 c/u.
Después de diez horas el costo por cada una es de dos pesos*/

let hours = prompt('Ingrese horas de uso del estacionamiento');
   
if (hours <= 2) {
    let result = hours * 5;
  alert(`El pago por el uso del estacionamiento es: ${result}$`);
}

else if (hours >= 3 && hours < 5) {
    let result = hours * 4;
  alert(`El pago por el uso del estacionamiento es: ${result}$`);
}

else if (hours >= 5 && hours < 10)  {
    let result = hours * 3;
  alert(`El pago por el uso del estacionamiento es: ${result}$`);
}

else if (hours >= 10) {
    let result =hours * 2  ;
  alert(`El pago por el uso del estacionamiento es: ${result}$`);
}

else{
  alert('No tiene disponibilidad');
}
      