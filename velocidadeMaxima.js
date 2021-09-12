//velocidade maxima de ate 70 km
//a cada 5 km voce ganha um ponto na carteira
// math.floor()
// caso seja maior que 12 a carteira sera suspensa

verificarVelocidade(130);

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if (velocidade <= velocidadeMaxima)
      console.log('ok');
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima)/kmPorPonto));
        if (pontos >= 12)
            console.log('carteira suspensa');
        else
            console.log('pontos', pontos);
    }
    

}