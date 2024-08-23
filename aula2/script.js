console.log("aula-2 23/08/2024");
alert("ola");
document.write("" + "<br>");

//comparação
//let num1 = parseFloat(prompt("digite um número"));
//let num2 = parseFloat(prompt("digite outro número"));

//document.write("num1 é igual a num2: " + (num1 === num2) + "<br>");
//document.write("num1 é igual a num2: " + (num1 !== num2) + "<br>");



//estrutara de controle
let interruptor = "off";
if (interruptor == "on"){
    alert("lampada ligada!");
    document.write("ligou <br>");
}else{
    alert("lampada desligada!");
    document.write("desligada <br>");
}




let senha = prompt("Digite a sua senha: ");
let confirmacaoSenha = prompt("digite novamente");

if(senha === confirmacaoSenha){
    alert("senhas iguais");
}else{
    alert("senhas diferentes")
}