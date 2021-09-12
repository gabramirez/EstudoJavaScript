// criar uma função para mostrar os números primos

// Primos
//Compostos

// Ex: 10,11
// numeros primos são divisiveis po 1 ou por ele mesmo
exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite){

    for (let numero = 2; numero <= limite; numero++){
        if (NumeroPrimo(numero)) console.log(numero);
    }
}
function NumeroPrimo(numero){
    
    for (let divisor = 2; divisor < numero; divisor ++){
            if(numero % divisor === 0){
                return false;
            }
    }
    return true;
}