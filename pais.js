//4. dado un pais, imprimir el gentilicio mas el nombre del usuario

const name = Jairo;
const colombia = colombiano;
const peru = peruano;
const bolivia = boliviano;
const readLine = require("readline");
const country = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

country.question('choose your country : Colombia, Perú, Bolivia, Argentina', function(answer){
    if(answer === colombia){
        console.log(name + 'you are' + colombia)
    }

})