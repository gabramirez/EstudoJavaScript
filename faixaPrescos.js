//cria um array de objetos de faixa de precos para ele possa ser usado em um site o mercado livre
//faixa, tooltip, min.max

//1 opção por objetos

let faixas = [
    {tooltip: '1000 a 2000', min: 1000, max: 2000 },
    {tooltip: '2000 a 3000', min: 2000, max: 3000 },
    {tooltip: '4000 a 5000', min: 4000, max: 5000 } 
];
// 2 opcao factoryFunction

function criarFaixas (tooltip, min, max){
    return {
    tooltip,
    min,
    max
    }
}

let faixas2 = [
    criarFaixas('a',1,100),
    criarFaixas('b',100,1000),
    criarFaixas('c',1000,10000)
    
]

//terceira opção por construtor

function FaixaPrecos(tooltip, min,max){
    this.tooltip = tooltip,
    this.min = min,
    this.max = max
}

let faixa3 = [
    new FaixaPrecos('a',10,20),
    new FaixaPrecos('b', 30, 40),
    new FaixaPrecos('c',50,60)
]

console.log(faixas);
console.log(faixas2);
console.log(faixa3)
