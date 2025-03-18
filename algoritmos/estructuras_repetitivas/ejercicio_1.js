/*Un profesor tiene un salario inicial de $1500, y recibe un incremento 
de 10 % anual durante 6 años. ¿Cuál es su salario al cabo de 6
años? ¿Qué salario ha recibido en cada uno de los 6 años? Realice el
algoritmo y represente la solución mediante el diagrama de flujo, el
pseudocódigo y el diagrama N/S, utilizando el ciclo apropiado.

1) Programa una función que cuente el número de caracteres de una 
cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el 
número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de 
textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ')
 devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. 
miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

5) Programa una función que invierta las palabras de una cadena de texto, pe.
 miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra
 en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo
 (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá 
 true.8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.*/

function caminando() {

 
   let cadena = new String("Hola Mundo");

   console.log(cadena.length);
  
    return cadena;
}

caminando();


function saludar(saludo ="") {

    saludo = prompt("Ingrese una cadena");
    console.log(saludo.length);

}

saludar();


function saludando(saludo) {

    console.log(saludo.length);

}

saludando("Hola Mundo");



function recortando(saludo ="", longitud) {
 
    console.log(saludo.slice(longitud));

}

recortando("Hola Mundo", 4);


function dividirCadena(cadenaADividir ="", separador) {

    console.log(cadenaADividir.split(separador)) ;
  }

dividirCadena("En Feb March Abr May", " ");




function contarCaracteres(cadena = "") {
    
    cadena = prompt("Ingrese una cadena");
    
    if (!cadena) {
        console.warn('No ingresaste ningun caracter')
    } else {
        console.info(`La cadena ${cadena} tiene ${cadena.length} caracteres`)
    }
}

contarCaracteres("Bienvenido");


const recortarTexto = (cadena ="", longitud= undefined) =>
  (!cadena)
  ? console.warn('No ingresaste ningun caracter')
  : (longitud === undefined)
    ? console.warn('No ingresaste texto a recortar caracter')
    : console.info(cadena.slice(0, longitud))

recortarTexto("Bienvenido", 5);
 