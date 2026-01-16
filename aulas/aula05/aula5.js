let readline = require('readline-sync')

let nome = readline.question("Qual é o seu nome?")
console.log(`oi ${nome}`)

let numero = 1
let fruta = "banana"
let pet = "dog"
let pet1 = "cat"
let longi = "IvoVicente"
let senha = "123"

if(longi == "IvoVicente" && senha == "1234") {
    console.log(`--------Bem-vindo ${longi}----------`)
    let fruta1 = readline.question(`Qual é a sua fruta favorita ${nome} :`)
    console.log(`A sua fruta é ${fruta1}`)
    console.log("eu tbm gosto "+fruta1)

}else{
    console.log("Você n esta logado")
}
