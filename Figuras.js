// Codigo del cuadrado:
//const ladoCuadrado = ;

function PerimetroCuadrado(lado){
    return lado * 4;
}

function AreaCuadrado(lado){
    return lado * lado
} 

//Codigo del triangulo:
// const LadoTriangulo1 = 6;
// const LadoTriangulo2 = 6;
// const BaseTriangulo = 4;

// const AlturaTriangulo = 5.5;

function PerimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base
}

function AreaTriangulo(base, altura){
    return (base * altura) / 2;
} 


//Codigo de la Circunferencia:

// Radio
//const radioCircunferencia = 4;


 // Diámetro
function diametroCircunferencia(radio){
    return radio * 2
} 


 // PI
const PI = Math.PI;


 // Circunferencia
 function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
  }

 
// Área
 function áreaCircunferencia(radio){
    return (radio * radio) * PI
 } 





