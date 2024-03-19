/*El presidente de la república ha decidido estimular a todos los estudiantes de 
una universidad mediante la asignación de becas mensuales, para esto se 
tomarán en consideración los siguientes criterios:
Para alumnos mayores de 18 años con promedio mayor o igual a 9, la beca será de 
$2000.00; con promedio mayor o igual a 7.5, de $1000.00; para los promedios 
menores de 7.5 pero mayores o iguales a 6.0, de  $500.00; a los demás se les 
enviará una carta de invitación incitándolos a que estudien más en el próximo 
ciclo escolar. A los alumnos de 18 años o menores de esta edad, con promedios
mayores o iguales a 9, se les dará $3000; con promedios menores a 9 pero 
mayores o iguales a 8, $2000; para los alumnos con promedios menores a  8 pero 
mayores o iguales a 6, se les dará $100, y a los alumnos que tengan promedios 
menores a 6 se les enviará carta de invitación.*/

alert('Bienvenido al Sistema de Becas. Por favor, Ingrese los datos');
let edad = prompt('Ingrese edad');
let promedio =prompt('Ingrese promedio');



if (edad > 18 ) {

    if (promedio >=9 && promedio <=10 ) {
        console.log('Se le otorgara una beca de $2000');
    }

    else if( promedio >= 7.5 && promedio < 9){
        console.log('Se le otorgara una beca de $1000');
    }

    else if (promedio <=7.5 && promedio >= 6) {
        console.log('Se le otorgara una beca de $500');
    }
    else if (promedio < 6) {
        console.log('Por favor enviar carta de invitacion para motivar al estudiante');
    }
}

else if( edad <= 18 && edad >=16){

    if (promedio >=9 && promedio <=10 ) {
        console.log('Se le otorgara una beca de $3000');
    }

    else if( promedio >= 8){
        console.log('Se le otorgara una beca de $2000');
    }

    else if (promedio < 8 && promedio >= 6) {
        console.log('Se le otorgara una beca de $100');
    }
    else if (promedio < 6) {
        console.log('Por favor enviar carta de invitacion para motivar al estudiante');
    }

}


else{
    console.log('No cumple con la edad');
}





