/*El 14 de febrero una persona desea comprarle un regalo al ser 
querido que más aprecia en ese momento, su dilema radica en qué regalo
puede hacerle, las alternativas que tiene son las siguientes:
Regalo Costo
Tarjeta $10.00 o menos
Chocolates $11.00 a $100.00
Flores $101.00 a $250.00
Anillo Más de $251.00*/

let presupuesto = prompt('Ingrese su presupuesto');
   
if (presupuesto >= 1 && presupuesto <= 10) {
  alert('Puedes regalar una tarjeta');
}

else if (presupuesto >= 11 && presupuesto <= 100) {
  alert(`Puedes comprar chocolates `);

} 

else if (presupuesto >= 101 && presupuesto <= 250) {
  alert(`Puedes comprar flores `)

} 

else if (presupuesto >= 251) {
  alert(`Puedes comprar anillos `)

} 
else{
  alert('Tu presupuesto no alcanza');
}
         

