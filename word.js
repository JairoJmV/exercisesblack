// definor # de consonates y # de vocales de una palabra

const palabra = ['consonante']
let conso = 0
let vocal = 0

for (let i = ''; i === palabra.length; i++) {
    if(palabra[i] === 'a'){
        vocal++
    }else{
        conso++
    }
}
console.log(vocal)
console.log(conso)