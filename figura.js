
//Cuandrados//
console.group("Cuadrados");


//const ladoCuadrado = 5;
//console.log("El lado del cuadrado es : " + ladoCuadrado);

function perimetroC( ladoCuadrado) {
   return perimetroC = ladoCuadrado * 4;
//console.log("El perimetro del cuadrado es : " + perimetroCuadrado + "cm");
}
 
function areaC(ladoCuadrado) {
    return areaCuadrado = ladoCuadrado * ladoCuadrado;
    //console.log("El area del cuadrado es : " + areaCuadrado + "cm"); 
}


console.groupEnd();

//Triangulo//

console.group("Triangulos");

//const ladoTriangulo = 6;
//console.log("El lado del triangulo es : " + ladoTriangulo);

//const baseTriangulo = 4;
//console.log("La base del triangulo es : " + baseTriangulo);

function perimetroT(ladoTriangulo1,ladoTriangulo2, baseTriangulo) {
    return perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
//console.log("El perimetro del triangulo es : " + perimetroTriangulo + "cm");
}


//const alturaTriangulo = 5.5;
//console.log("La altura del triangulo es : " + alturaTriangulo);

function AreaT(baseTriangulo, alturaTriangulo) {
    
 return areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
//console.log("El area del triangulo es : " + areaTriangulo + "cm");
}



console.groupEnd();

//Circulo//

console.group("Circulos");

//const radioCirculo = 4;
//console.log("El radio del circulo es : " + radioCirculo);

function DiametroC(radioCirculo) {
 return diametroCirculo = radioCirculo * 2;
//console.log("El diametro del circulo es : " + diametroCirculo);
}


const PI = Math.PI;

function perimetroC(diametroCirculo) {
    const diametroCirculo= DiametroC();
    return perimetroCirculo = diametroCirculo * PI;
//console.log("El perimetro del circulo es : " + perimetroCirculo + "cm");
}

function areaC(radioCirculo) {
return areaCirculo = (radioCirculo * radioCirculo)* PI;
//console.log("El area del circulo es : " + areaCirculo + "cm");
}


console.groupEnd();