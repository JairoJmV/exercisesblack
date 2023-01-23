const arreglo = [0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0]
const valor = 0

for (let index = 0; index < arreglo.length; index++) {
    valor[index] = valor[index - 2] + valor[index - 1];
}

console.log(arreglo.values[0])