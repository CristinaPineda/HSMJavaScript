var valorimc = [];
var altura = [];
var imc = [];

altura.push(prompt("Digite sua altura: "));
var peso = prompt("Digite seu peso: ");
calculoIMC();
alerta();

function calculoIMC(){       //função para o calculo do imc 
    imc = peso/(altura**2).toFixed(2);
    valorimc.push(imc);
    document.write('Seu IMC é: ' + imc);
}

function alerta(){    //função de emissão de alerta sobre a classificação do imc 
    if(imc < 18.5){
        alert('Você está na classificação 1, MAGREZA! Obesidade: grau 0');
    }
    if(imc >= 18.5 && imc <= 24.9){
        alert('Você está na classificação 2, NORMAL! Obesidade: grau 0');
    }
    if(imc >= 25 && imc <= 29.9){
        alert('Você está na classificação 3, SOBREPESO! Obesidade: grau I');
    }
    if(imc >= 30 && imc <= 39.9){
        alert('Você está na classificação 4, OBESIDADE! Obesidade: grau II');
    }
    if(imc > 40){
        alert('Você está na classificação 5, OBESIDADE GRAVE! Obesidade: grau III');
    }
alert('Obrigada');
}