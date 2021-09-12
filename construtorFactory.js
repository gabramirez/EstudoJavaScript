
//Pascal case - UmDoisTresQuatro
function Celular(nomeCelular,tamanhoTela,capacidadeBateria){
    this.nomeCelular = nomeCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function (){
        console.log("Fazendo ligação !!!!");
    }

}

const celular = new Celular('asus', 5,5,5000);
console.log(Celular)