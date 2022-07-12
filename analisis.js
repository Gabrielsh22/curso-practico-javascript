//Helpers
function esPar(numerito){
    return (numerito % 2 === 0);
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// Calculadora de Mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    }else{
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}


//Mediana General
const salariosColombia = colombia.map(
    function(personita){
        return personita.salary;
    }
);

const salariosColombiaSorted = salariosColombia.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);

const medianaGeneralDeColombia = medianaSalarios(salariosColombiaSorted)

// Mediana del top 10%

const spliceStart = (salariosColombiaSorted.length * 90) / 100;
const spliceCount = salariosColombiaSorted.length - spliceStart;

const salariosColombiaTop10 = salariosColombiaSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaColombiaTop10 = medianaSalarios(salariosColombiaTop10)

console.log({
    medianaGeneralDeColombia,
    medianaColombiaTop10,
});

