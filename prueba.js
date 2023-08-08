//Crea un programa que compruebe que el trineo de Santa Claus hace una parabola al saltar entre ciudades. Recibes un array de números que representan la altura en la que se encuentra el trineo en cada momento.

const { remove, add } = require("@11ty/eleventy/src/TemplateCache");

//Para que la parabola sea correcta, el viaje del trineo debe ser ascendente al principio, llegar al punto más alto y descender hasta el final. No puede volver a subir una vez que ha bajado, ni puede iniciar el viaje bajando. Veamos unos ejemplos:

// const heights = [1, 3, 8, 5, 2]
// checkJump(heights) // true

/*
Es true.
El salto va de abajo a arriba y luego de arriba a abajo:

    8 (punto más alto)
   ↗ ↘
  3   5
 ↗     ↘
1       2
/

const heights = [1, 7, 3, 5]
checkJump(heights) // false

/
Es false.
Va de abajo a arriba, de arriba a abajo y luego sube otra vez.

  7   5 
 ↗ ↘ ↗
1   3
Necesitamos que el programa devuelva un boolean que indique si el trineo hace una parabola o no.

A tener en cuenta
Para que el salto sea válido tiene que subir una vez y bajar una vez. Si durante el salto se queda en la misma altura entre dos posiciones, la parabola continua.
No hace falta que el punto de inicio y final sean el mismo (las ciudades pueden estar a diferentes alturas)*/


// function nFactorial(n) {
//     //factorial = n * n - 1;

//     if (n === 1) {
//         return 1;
//     }

//     return n *  nFactorial(n - 1)

// }

// console.log(nFactorial(5));



// function nFibonacci(n) {

//     if (n === 0 || n === 1) {
//         return n
//     }
//     return nFibonacci(n-1) + nFibonacci(n-2)
// }

// console.log(nFibonacci(7))



// function tablaMultiplicar(num){

//     let titulo = " # Tabla del  " + num + " #\n" ;
//     console.log(titulo); 
//     for (let i = 0; i < 11; i++) {
//         let resultado = i * num;
//         let tabla = i + " x " + num + " = " + resultado;
//         console.log(tabla);  
//     }

// }

// tablaMultiplicar(8);

//comprobar si es palindormo el string 


// function palindromo(palabra = "") {
//     let pal = true;
//     for (let i = 0; i < palabra.length/2; i++) {
//         if (palabra[i] === palabra[palabra.length - 1 - i]) {
//             pal = true;

//         }else{
//             pal= false;
//             return console.log(pal)
//         }
//     }
//     return console.log(pal)
// }

// palindromo("sotdtos");

// function palindromoSolutionII(word = ""){

//     console.log(word)
//     let reversed =  word.split("").reverse().join("");
//     console.log(reversed);

//     if(reversed === word){
//         console.log(true);
//     }
//     else{
//         console.log(false);
//     }
// }

// palindromoSolutionII("anssna");


// function consiguePalabra(frase = "", palabra = "") {
//     let fraseArray = frase.split(" ");
//     //console.log(fraseArray)
//     if (fraseArray.includes(palabra)) {
//         console.log(true);

//     }else{
//         console.log(false);
//     }

// }

// consiguePalabra("la computadora, es rapida", "muy")



let arr = [1, 2, 2, 3, 3, 6, 4, 5];

//Stack [1,2,3,6,4,5,2,3];

function Stack(pila) {
    this.pila= pila;

    Stack.prototype.add = function(e){
        this.pila.push(e);
    }

    Stack.prototype.remove = function(){
        return this.pila.pop();
    }

    Stack.prototype.empty = function (){
        if(this.pila.length === 0) return "Empty";
    }

    Stack.prototype.showArray = function (){
        console.log(this.pila);
    }

    Stack.prototype.separate = function (arr){
        for (let i = 0; i < miStack.pila.length; i++) {
            if(miStack.pila[i] === miStack.pila[miStack.pila.length-1]){
                break
            }
            else if(miStack.pila[i] ===  miStack.pila[i+1]){
                let removed = miStack.remove();
                
                arr = miStack.add(removed);
            }
        }

    }
}
let miStack = new Stack(arr)
//miStack.add(5);

console.log(miStack.pila);
miStack.showArray();