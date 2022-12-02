//1. dado un usuario con nombre y edad, determinar si puede beber alcohol o si puede empezar a recibir pensión
/*
const edad = require("readline");
const ed = edad.createInterface({
    input: process.stdin,
    output: process.stdout,
});

    ed.question("cuantos años tienes?", function(answer){
    
        console.log('como tu edad es ' + answer);
        if(answer >= 18){
            console.log('puedes beber alcohol')
            }
        else console.log('eres un pinche menor');
        if(answer >= 62){
            console.log('y puedes empezar a recibir pensión')
            }
        ed.close();
    });
*/

const edad = 61;

if(edad => 62){
    console.log('puedes beber alcohol y recibir pensión');
} 
else if(edad => 18){
console.groupCollapsed('puedes beber alcohol');
}
else console.log('contenido no disponible');


//estudiar else if
