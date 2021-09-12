//criar função somar que retorna a
// soma de todos os multiplos de 3 e 5

somar(10);
function somar(limite){
   let m3 = 0;
   let m5 = 0; 
    
    for (i = 0; i <= limite; i++){
        if (i % 3 === 0)
          m3 += i;
        if (i % 5 === 0) 
          m5 =+ i;
    }
   console.log( m3 + m5);
}
