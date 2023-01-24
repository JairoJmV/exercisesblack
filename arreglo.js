const arreglo = [0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0]
let numUno = 0
let numCero = 1

for (let index = 0; index < arreglo.length; index++) {
    numUno = numUno + arreglo[index];
    numCero = numCero + arreglo[index];
}
console.log(numUno);
console.log(numCero)