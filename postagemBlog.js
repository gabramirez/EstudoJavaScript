//Eu quero que você crie neste exercicio um objeto de postagem de blog que vai conter as seguintes
//postagem
/*
titilo
mensagem
autor
visualizacoes
comentarios
     (autor, mensagem)
estaAoVivo
*/ 
let postagem = {
    titulo: 'Dessenhos',
    mensagem: 'Faca seus desenhos',
    autor: 'Alessandro',
    visualizacoes: 3,
    comentarios: [{
        autor: 'Gabriel',
        mensagem: "este blog é muito legal"
    },
    {
        autor: 'Gabriella',
        mensagem: "este blog é muito bom"
    }],
    estaAoVivo: true
}
console.log(postagem)