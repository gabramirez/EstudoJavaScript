
    let contribuicaoINSSMensal = 0;
    let contribuicaoINSSAnual = 0;
    
    let quantidadePessoasNecessarias = 0;
    let salario = 0; 
 
    function calculoInss(salario, quantidadePessoasNecessarias){
        
        if (salario <= 1045.00){
           this.contribuicaoINSSMensal = ((salario * 7.5) /100);
           this.contribuicaoINSSAnual = this.contribuicaoINSSMensal * 12;
        }
        else if (salario < 2089.00){
            this.contribuicaoINSSMensal = ((salario * 9 )/100);
            this.contribuicaoINSSAnual = this.contribuicaoINSSMensal * 12;
        }
        else if(salario < 3134.40){
            this.contribuicaoINSSMensal = ((salario * 12) /100);
            this.contribuicaoINSSAnual = this.contribuicaoINSSMensal * 12;
        }else{
            this.contribuicaoINSSMensal = ((salario * 14 )/100);
            this.contribuicaoINSSAnual = this.contribuicaoINSSMensal * 12;
        }
        console.log("Mensal: ",this.contribuicaoINSSMensal," ","Anual", this.contribuicaoINSSAnual);
    }
calculoInss(1045.00);
    


