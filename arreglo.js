const arreglo = [0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0]
let numUno = 0
let numCero = 1

for (let index = 0; index < arreglo.length; index++) {
    numUno = numUno + arreglo[index];
    //numCero = arreglo.length[index = 0] + 1;
}
console.log(numUno);
console.log(numCero);

/*
for (let index = 0; index < arreglo.length; index++) {
    numUno = numUno + arreglo[index];
    numCero = numCero + arreglo[index];
}
console.log(numUno);
console.log(numCero);

arreglo.forEach(element =>  {
    arreglo.length[index] = 1, - 1;
    arreglo.length[index] = 0, + 1;
});
console.log(element);
*/