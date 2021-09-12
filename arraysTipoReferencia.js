const marca = [
    {id:1, nome:'a'},
    {id:2, nome:'b'},
    {id:3, nome:'c'}
];

const marcas = marca.find(function(marca){
    return marca.nome === 'a';
});

console.log(marcas);