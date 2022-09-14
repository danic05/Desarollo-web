const multiplicacion = [16, 154, 2, 9, 17, 15, 123, 50];
const multi = multiplicacion .reduce((multiplic,multiplo ) => {
    return multiplic *multiplo
})
console.log('la multiplicacion es: '+ multi);

const restica = numero => numero/2;
const resta = (callbackFunction, numero) =>{
    const resto = callbackFunction(numero);
    console.log(resto);
}
resta(restica, 48);

const AñosEstudiados = [9, 5, 4, 7, 15, 10, 8, 2, 7, 17, 14, 25];
const resultadito = AñosEstudiados.filter(años => años>= 5);
console.log(resultadito);

