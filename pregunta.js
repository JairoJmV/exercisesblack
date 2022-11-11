//5. preguntar al usuario n veces una pregunta hasta que la respuesta sea correcta

const readLine = require("readline");

const reader = readLine.createInterface({ input: process.stdin, output: process.stdout });


const makeQuestion = async (question) => {
  return new Promise((resolve) =>
    reader.question(question, answer => {
      resolve(answer)
      reader.close();
    })
  )
}

(async () => {
  while(true){
    const response = await makeQuestion('Who\'s the best bass player? ');
    if(response.toLowerCase() === 'kevin') {
      console.log('You\'re right');
      break;
    }
    console.log('Bad answer');
  }
})()

/*
const pregunta = rp;
const respuesta = require("readline");
const rp = respuesta.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rp.question(pregunta, function(answer){
   
});
*/

