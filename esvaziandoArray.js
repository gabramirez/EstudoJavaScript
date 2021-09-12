let numeros = [1,2,3,4,5,6];

//solução 1

numeros =[];

//solução 2 melhor de todos

numeros.length = 0;
console.log(numeros);

//solução 3s

numeros.splice(0, numeros.length);
console.log(numeros);

//solução 4

numeros.pop();