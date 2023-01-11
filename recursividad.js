// hola mundo, letra por letra en una nueva línea, iterando y usando recursividad

const message = 'hola mundo\n';
const print = (message) => {
    if (message.length === message){
        return message
    }
    else {
       return message.length * print(message.length - 1)
    }
    console.log(print)
}
