function isoceles(lado1, lado2, base){
    if(lado1 === lado2){
        alert("Oye este es un triangulo isoceles");
    }else{
        alert("Oye no se que es esto");
    }

    const Altura = Math.sqrt(lado1**2 - lado2**2 / 4);
    return Altura;

}