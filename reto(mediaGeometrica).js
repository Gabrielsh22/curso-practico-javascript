const mediaGeometrica = [];
function calcularMediaGeometrica(mediaGeometrica){
    const multiplicacion = mediaGeometrica.reduce(
        function(valoAcumulado = 0, nuevoElementos){
            return valoAcumulado * nuevoElementos;
        }
    )

    const calculoDeRaiz = Math.cbrt(multiplicacion);
    console.log("oye tu media geometrica es " + calculoDeRaiz);
}