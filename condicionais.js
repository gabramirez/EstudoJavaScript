//usando o if...else
let hora = 22;

if(hora > 6 && hora < 12){
    //código a ser executado
    console.log("bom dia");
}
else if (hora > 12 && hora < 18){
      //código a ser executado
      console.log("boa tarde");
}
else{
    //codigo a ser executado
    console.log("boa noite");
}

// condicional usando o switch

let permissao;
permissao = 'gerente'

switch (permissao){
    case 'comum':
        console.log('usuario comum');
        break;
    case 'gerente':
        console.log('usuario gerente');
        break;   
     case 'diretor':
        console.log('usuario diretor');
        break;   
    default:
        console.log('usuario não encontrado');
        break;   
}
