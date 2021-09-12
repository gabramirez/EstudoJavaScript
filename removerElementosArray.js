//removendo elementos de um array

const numeros = [1,2,3,4,5,6];

//final

const ultimo = numeros.pop();
console.log(ultimo);

//inicio

const primeiro = numeros.shift();
console.log(numeros);

//meio

const meio = numeros.splice(2,1);
console.log(meio);
