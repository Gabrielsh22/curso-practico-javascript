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

// Interacción con HTML:

//Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const valor = input.value;
    const perimetro = PerimetroCuadrado(valor);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const valor = input.value;
    const area = AreaCuadrado(valor);
    alert(area);
}
//Triangulo
function calcularPerimetroTriangulo(){
    const input = document.getElementById("InputTriangulolado1");
    const valor = Number(input.value);
    const input2 = document.getElementById("InputTriangulolado2");
    const valor2 = Number(input2.value);
    const input3 = document.getElementById("InputTrianguloBase");
    const valor3 = Number(input3.value);
    const perimetro = PerimetroTriangulo(valor, valor2, valor3);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const input = document.getElementById("InputTrianguloBase");
    const valor = Number(input.value);
    const input2 = document.getElementById("InputTrinaguloAltura");
    const valor2 = Number(input2.value);
    const area = AreaTriangulo(valor, valor2);
    alert(area);
}

//Circunferencia
function calcularDiámetroCirculo(){
    const input = document.getElementById("InputCirculoRadio");
    const valor = input.value;
    const diametro = diametroCircunferencia(valor);
    alert(diametro);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculoRadio");
    const valor = input.value;
    const perimetro = perimetroCirculo(valor);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculoRadio");
    const valor = input.value;
    const area = áreaCircunferencia(valor);
    alert(area);
}
