/*
Calculadora con memoria
    Crea una calculadora básica que permita realizar operaciones de suma, resta, multiplicación y división. 
    Además, la calculadora debe tener una función de memoria que almacene el resultado de la última operación
    realizada utilizando un closure.
*/

function calculadora(n1, n2) {
    let caja = 0;

    return function () {

        function sumar() {
            let resultado = n1 + n2
            caja += resultado;
            console.log(resultado)
            return resultado
        }
        function restar() {
            let resultado = n1 - n2;
            caja -= resultado;
            console.log(resultado)
            return resultado
        }
        function multiplicar() {
            let resultado = n1 * n2;
            caja = caja * resultado;
            console.log(resultado);
            return resultado
        }
        function dividir() {
            let resultado = n1 / n2;
            caja = caja * resultado;
            console.log(resultado);
            return resultado;
        }
    }
}

const suma = calculadora(2, 2);