let readline = require('readline-sync')

let nome = readline.question("qual é o seu nome:")

const numero = null

switch(nome){
    case "ivo":
        console.log("o seu nome é ivo")
        numero = 8
        let nun2 = 2
        console.log(nun2)
        break;
    case "Ivo":
        console.log("eu to aqui")
        numero = 10
        break;
    case "IVO":
        console.log("EU TO AQUI!")
        numero = 50
        break;
    default:
        console.log("eu n conheço")
}

numero = 20

console.log(numero)
