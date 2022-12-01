//4. dado un pais, imprimir el gentilicio mas el nombre del usuario

const name = 'Jairo';
const readLine = require("readline");
const country = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

country.question('choose your country : Colombia, Perú, Bolivia, Argentina: ', function(answer){
  
        if(answer == 'colombia'){
            console.log(name + ' you are colombian')
        }
        else if(answer == 'peru'){
            console.log(name + ' you are peruano')
        }
        else if(answer == 'bolivia'){
            console.log(name + ' you are boliviano')
        }
        else if(answer == 'argentina'){
            console.log(name + ' you are argentino')
        }
        else console.log('country not avialable');
        
    
    country.close();
});


// estudiar switch