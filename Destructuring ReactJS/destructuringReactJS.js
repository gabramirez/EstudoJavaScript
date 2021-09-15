//forma antiga
var arr = ['apple', 'Banana', 'Orange'];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];

//Destructuring Assignment
var [apple2, banana2, orange2] = ['Apple', 'Banana', 'Orange'];
console.log(apple, apple2);

//com objetos literais

var obj = {
    name: 'Gabriel'
};
// neste caso estou destruindo a variavel name e atribuindo a variavel name2
var { name: name2 } = obj

console.log(name2);

// objetos dentro do objeto
var obj = {
    name: 'Gabriel',
    props : {
        age: 26,
        favoriteColors: [ 'black', 'blue']

    }
};
    //forma antiga
     var age = obj.props.age;
     var color1 = obj.props.favoriteColors[0];
    //forma nova - destroi o objeto, acessou uma propriedade e fez o destructuring dentro da propriedade
    var {props: {age: age2, 
        favoriteColors: [color1, color2]}
    } = obj;
    console.log(age);
    console.log(color1);

// com funcoes
    //forma antiga
    let [{name: fruitName}] = arr;

    function sum(arr){
      return arr[0] + arr[1];
    }
    console.log(sum([5,5]))
    //forma nova

    function sum([a,b] = [0,0]){
        return a+b;
    }