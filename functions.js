let corSite = "azul";
function resetaCor(){
    corSite = "";
};

console.log(corSite);
resetaCor();
console.log(corSite);

function resetaCores(cor, tonalidade){
    corSite = cor + " " + tonalidade;
};
resetaCores("vermelho", "claro");
console.log(corSite);

//Faz um calculo ou operação e retorna algo
function dizerNome(){
    console.log('Gabriel');
}
dizerNome();



function MultiplicarPorDois(valor){
    return valor * 2;
};
//console.log(MultiplicarPorDois(5));

let resultado = MultiplicarPorDois(5);
console.log(resultado);