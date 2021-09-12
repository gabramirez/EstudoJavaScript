//divisivel por 3 => Fizz
//divisivel por 2 => Buzz
//divisivel por 3 e 5 => FizzBuzz
//não divisivel por 3 ou por 5 => entrada
//não é um número => não é um número

const resultado = fizzBuzz(11);
console.log(resultado);

function fizzBuzz(entrada){
   
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz'
    if (entrada % 3 === 0)
         return "Fizz";
  
    if (entrada % 5 === 0)
         return "Buzz";
    
    return entrada;
}
