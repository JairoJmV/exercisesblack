//5. preguntar al usuario n veces una pregunta hasta que la respuesta sea correcta

const pregunta = 'cuanto es 2+2 ';
const respuesta = require("readline");
const rp = respuesta.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rp.question(pregunta, function(answer){
    if(answer == 4){
        return('correcto' + rp.close())
      } 
    else(rp.question(pregunta)) 
});