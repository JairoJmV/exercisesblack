//1. dado un usuario con nombre y edad, determinar si puede beber alcohol o si puede empezar a recibir pensión

const nombre = require("readline");
const rl = nombre.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("cual es tu nombre?", function(answer){
    console.log(answer);
    rl.close();

    ed.question("cuantos años tienes?", function(answer){
    
        console.log('como tu edad es ' + answer);
        if(answer >= 18){
            console.log('puedes beber alcohol')
            }
        else(console.log('eres un pinche menor'))
        if(answer >= 62){
            console.log('y puedes empezar a recibir pensión')
            }
        ed.close();
    });
});

const edad = require("readline");
const ed = edad.createInterface({
    input: process.stdin,
    output: process.stdout,
});


