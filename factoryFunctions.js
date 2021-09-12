//const celular = {
//    marcaCelular : 'ASUS',
//    tamanhoTela : {
//        vertical : 155,
 //       horizontal : 75
//    },
//    capacidadeBateria : 5000,
//    ligar : function(){
 //       console.log("Fazendo Ligação")
//    }

//}

function criarCelular(nomeCelular, tamanhoTela, capacidadeBateria ){
    return{
        nomeCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar () {

            console.log("fazendo Ligação....")
            
        }
    }
}
const celular1 = criarCelular('Zenfone', 5, 5, 5000);
console.log(celular1);