// Codigo del cuadrado:
console.group("Cuadrado");
const LadoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + LadoCuadrado + "cm");

const PerimetroCuadrado = LadoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + PerimetroCuadrado  + "cm");

const AreaCuadrado = LadoCuadrado * LadoCuadrado;
console.log("El area del cuadrado es: " + AreaCuadrado + "cm^2");
console.groupEnd();

//Codigo del triangulo:
console.group("Triangulo");
const LadoTriangulo1 = 6;
const LadoTriangulo2 = 6;
const BaseTriangulo = 4;
console.log("Los lados del triangulo miden: " + LadoTriangulo1 + "cm, " + LadoTriangulo2 + "cm, " + BaseTriangulo + "cm");

const AlturaTriangulo = 5.5;
console.log("La altura del triangulo es: " + AlturaTriangulo + " cm");

const PerimetroTriangulo = LadoTriangulo1 + LadoTriangulo2 + BaseTriangulo;
console.log("El perimetro del triangulo es: " + PerimetroTriangulo + "cm");

const AreaTriangulo = (BaseTriangulo * AlturaTriangulo) / 2;
console.log("El area de triangulo es: " + AreaTriangulo + "cm^2 ");

console.groupEnd();

//Codigo de la Circunferencia:
console.group("Circunferencia");
 // Radio
const radioCircunferencia = 4;
console.log("El radio del circulo es: " + radioCircunferencia + "cm");

 // Diámetro
const diametroCircunferencia = radioCircunferencia * 2;
console.log("El diametro del circulo es: " + diametroCircunferencia + "cm");

 // PI
const PI = Math.PI;
console.log("PI es: " + PI);

 // Circunferencia
const perimetroCircunferencia = diametroCircunferencia * PI;
console.log("El perimetro del circulo es: " + perimetroCircunferencia + "cm");

 
// Área
 const áreaCircunferencia = (radioCircunferencia * radioCircunferencia) * PI;
 console.log("El área del circulo es: " + áreaCircunferencia + "cm^2");

console.groupEnd();





