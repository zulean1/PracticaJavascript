//Cuadrado
console.group("Cuadrados");

function perimetroC( ladoCuadrado) {
   return perimetroC = ladoCuadrado * 4;

}
 
function areaC(ladoCuadrado) {
    return areaCuadrado = ladoCuadrado * ladoCuadrado;
}

console.groupEnd();

//Triangulo//

console.group("Triangulos");

function perimetroT(ladoTriangulo1 ,ladoTriangulo2 , baseTriangulo ) {
  
    return perimetroTriangulo =( (ladoTriangulo1 + ladoTriangulo2) + baseTriangulo );

}


function AreaT(baseTriangulo, alturaTriangulo) {
    
 return areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

}

console.groupEnd();

//Circulo

console.group("Circulos");

function DiametroC(radioCirculo) {
 return diametroCirculo = (radioCirculo * 2);

}

const PI = Math.PI;

function perimetroCC(diametroCirculo) {
   const diametro =DiametroC();
   console.log(diametro);
   return diametro = (diametroCirculo * PI);
   
}

function areaCC(radioCirculo) {
return areaCirculo = (radioCirculo * radioCirculo)* PI;

}

console.groupEnd();

//Recibir datos desde HTML

function calcularPerimetroC() {
    const inputcuadrado = document.getElementById("ladoC");
    const value = inputcuadrado.value;

    
   const perimetro = perimetroC(value);

    alert(perimetro);
}

function calcularAreaC() {
    const inputcuadrado = document.getElementById("ladoC");
    const value = inputcuadrado.value;
    
    const area = areaC(value);

    alert(area);
}


function calcularPerimetroT() {
    const lado1 = document.getElementById("lado1").value;
    const lado2 = document.getElementById("lado2").value;
    const baseT = document.getElementById("baseT").value;
 
    
     const perimetro = perimetroT(lado1, lado2, baseT);
    
 
    alert(perimetro);
   


}

function calcularAreaT() {
    const baseT = document.getElementById("baseT").value;
    const alturaT = document.getElementById("alturaT").value;

    const area = AreaT( baseT, alturaT);

    alert(area);
   
}


function calcularDiametroCC() {
    const radio = document.getElementById("radio");
    const value = radio.value;
    
    const diametro = DiametroC(value);

    alert(diametro);
   
   }

function calcularPerimetroCC() {
    const radio = document.getElementById("radio");
    const value = radio.value;
    
    const perimetro = perimetroCC(value);

    alert(perimetro);
}


function calcularAreaCC() {
    const radio = document.getElementById("radio");
    const value = radio.value;
    
    const area = areaCC(value);

    alert(area);
}