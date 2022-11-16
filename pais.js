//4. dado un pais, imprimir el gentilicio mas el nombre del usuario

const name = 'Jairo';
const readLine = require("readline");
const country = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

country.question('choose your country : Colombia, Perú, Bolivia, Argentina: ', function(answer){
    async() =>{
        if(answer === 'colombia'){
            console.log(name + ' you are colombiano')
        }
        if(answer === 'peru'){
            console.log(name + ' you are peruano')
        }
        if(answer === 'bolivia'){
            console.log(name + ' you are boliviano')
        }
        if(answer === 'argentina'){
            console.log(name + ' you are argentino')
        }
    }
    console.log('country not avialable')
    country.close();
});

