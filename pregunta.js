//5. preguntar al usuario n veces una pregunta hasta que la respuesta sea correcta

const pregunta = rp;
const respuesta = require("readline");
const rp = respuesta.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rp.question(pregunta, function(answer){
   
});