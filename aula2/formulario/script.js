var botao = document.getElementById('verificaButton');

botao.onclick = function(){
    var idade = document.getElementById('idadeInput').value;
    // console.log(idade);

    var resultado = document.getElementById('resultado');

  idade = 2024 - idade; 

    if(idade >= 18){
        // console.log("maior de 18");
        resultado.textContent = "maior de idade";
    }else{
        // console.log("menor de idade")
        resultado.textContent = "menor de idade";
    }
}