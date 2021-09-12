//1- for

for(let i=0; i < 5; i++){
    console.log("Estou aprendendo", i);
}
    // neste caso o if é utilizado para imprimir somente os impares
for(let j=0; j < 5; j++){

    if(j % 2 != 0){
        console.log(j);
    }
   
}
//2- While
   // A diferença do for para o while é que a variavel é declarada fora
let g = 1;

while(g <= 5){
    if(g % 2 != 0){
        console.log(g);
    }
    g++;
}

//3- do..while

let k = 0;
do {
   console.log('digitando');
   k++;
}while (k < 10)

//4- for..in

const pessoa = {
    nome: 'Gabriel',
    idade: 18
};
      // chave vem da palavra key-value ex. o nome é key e gabriel é o value
for(let chave in pessoa){
    console.log(chave, pessoa["nome"]);
}

const cores = ['vermelho','azul','amarelo'];
      //no array todas as propriedades são acessadas por um indice
for(let indice in cores){
    console.log(indice, cores[indice]);
}

//for..of

for(cor of cores){
    console.log(cor);
}

