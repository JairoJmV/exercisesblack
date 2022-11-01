//1. dado un usuario con nombre y edad, determinar si puede beber alcohol o si puede empezar a recibir pensión

/*
const promp = require("prompt-sync");

const nombre = promp("cual es tu nombre?");
console.log(nombre);

const edad = promp("cuantos años tienes?");
if(edad >= 18){
    console.log('puedes beber')
}
else(console.log('eres un pinche menor'))
if(edad >= 62){
    console.log('y puedes empezar a recibir pensión')
}
*/


const nombre = require("readline");
const rl = nombre.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("cual es tu nombre?", function(answer){
    console.log(answer);
    rl.close();
});

const edad = require("readline");
const ed = edad.createInterface({
    input: process.stdin,
    output: process.stdout,
});

ed.question("cuantos años tienes?", function(answer){
    console.log('como tu edad es ' + answer);
    ed.close();
});

if(edad >= 18){
    console.log('puedes beber')
    }
else(console.log('eres un pinche menor'))
if(edad >= 62){
    console.log('y puedes empezar a recibir pensión')
    }