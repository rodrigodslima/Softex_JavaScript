// "Exemplo de array com 10 frutas usando laço for e forEach no mesmo escopo"

let frutas: string[] = [
  "Maçã",
  "Banana",
  "Laranja",
  "Uva",
  "Manga",
  "Abacaxi",
  "Melancia",
  "Pera",
  "Kiwi",
  "Morango"
];

// "Usando o laço for tradicional para percorrer o array"
for (let i = 0; i < frutas.length; i++) {
  console.log("Fruta (for): " + frutas[i]);
}

// "Usando o laço forEach para percorrer o mesmo array"
frutas.forEach((fruta) => {
  console.log("Fruta (forEach): " + fruta);
});






