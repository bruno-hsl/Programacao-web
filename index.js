//impressão no console do computador
console.log("olá mundo");

//declaração de variáveis

var nome = "Bruno"; //escopo geral
console.log(nome);

console.log(typeof nome); //verificar o tipo de variaval

let preco1 = 10.33;
let preco2 = 10;
let total = preco1 + preco2;
console.log(total);
//console.log(typeof preco1);


let cor = "azul"; //escopo local
console.log(cor);

const planeta = "terra"; // escopo local
console.log(planeta);

nome = "bruno";
console.log(nome);
cor = "verde";
console.log(cor);
// planeta = "marte" não permite reatribuição

// tipos de dados
let cidade = "Brasilia" // string
let telefone = 40028922; // inteiro
let status = true; //booleano (true or false)
let frutas = ["maça", "uva", "banana"]; //Arrays
let pessoa = {nome: "joão", idade: 15}; //objetos

console.log(typeof cidade);
console.log (typeof telefone);
console.log (typeof status);
console.log (typeof frutas);
console.log (typeof pessoa);

//modelo de impressão (literal)
console.log(`O seu nome é ${nome} e a sua cidade é ${cidade} seu telefone é ${telefone}`);

//operadores aritméticos
//(+) (-) (*) (/) (**) (%)

let a = 10;
let b = 2;
console.log(a + b);//adição
console.log(a-b);//subtração
console.log(a*b);//multiplicão
console.log(a/b);//divisão
console.log(a%b);//modulo "resto"
console.log(a ** b);//potenciação
let c = (a + b) / 2;
console.log(c);

//DOM (introdução)
document.getElementById("myH2").textContent = "aula1";