// Criando um array de frutas
let frutas = ["Maçã", "Banana", "Laranja", "Manga", "Uva"];

// Percorrendo e imprimindo as frutas com um laço for
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// Outra forma, mais moderna, é usar o for...of:


let frutas = ["Maçã", "Banana", "Laranja", "Manga", "Uva"];

for (let fruta of frutas) {
  console.log(fruta);
}

//Aqui vai a versão usando .forEach(), que é bem prática no JavaScript:

let frutas = ["Maçã", "Banana", "Laranja", "Manga", "Uva"];

frutas.forEach(function(fruta) {
  console.log(fruta);
});


//Ou, de forma mais moderna com arrow function:

let frutas = ["Maçã", "Banana", "Laranja", "Manga", "Uva"];

frutas.forEach(fruta => console.log(fruta));
