class Animais {

   public raca: String;
   public pelagem : String;
   public tamanho : Number;
   public expectativa_vida : Number;
   public nivel_de_energia: String;
   public social : Boolean;
   

   constructor(raca, pelagem, tamanho, expectativa_vida, nivel_de_energia, social ){

    this.raca = raca;
    this.expectativa_vida = expectativa_vida;
    this.nivel_de_energia = nivel_de_energia;
    this.pelagem = pelagem;
    this.social = social;
    this.tamanho = tamanho;

    

   }

   comer(){
    console.log("Comendo ração...")
   }
   tomarbanho(){
    console.log("Tomando banho...")
   }
   vacinar(){
    console.log("aplicando vacina...")
   }


   
}

const cachorro = new Animais("Pastor Alemão","preto",55,10,"muito",true);

console.log(cachorro)
