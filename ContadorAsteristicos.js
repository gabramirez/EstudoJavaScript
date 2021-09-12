//Criar uma função que exiba a quantidade de *
// que aquela linha possui

exibirAsteristicos(5);

function exibirAsteristicos(linhas){
 //       let padrao = '';
 //       for(let linha=1; linha <= linhas; linha ++){
//            padrao += '*';
//            console.log(padrao);
//        }

for (let linha=1; linha <= linhas; linha++){
    let padrao = '';
    for(i = 0; i < linha; i++){
        padrao += '*';
    }
    console.log(padrao);
}

}