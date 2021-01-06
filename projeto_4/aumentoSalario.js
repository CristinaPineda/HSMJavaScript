/*
Instruções do projeto
Os colaboradores de uma empresa recebem aumentos de acordo com o plano de trabalho, que é orientado pelos cálculos a seguir:

Plano A - Aumento de 10%;
Plano B - Aumento de 15%;
Plano C - Aumento de 20%.

Crie um programa que permita calcular o aumento de um colaborador e informe o novo salário. Use blocos do tipo switch.

Suba o código para sua conta no GitHub e compartilhe o link desse projeto no campo ao lado para que outros desenvolvedores possam analisá-lo.
*/

//Valores de salários criados para o exemplo do codigo ficar mais didático.
var salarioA = 5700.00;
var salarioB = 4200.00;
var salarioC = 3500.00;

var plano = prompt('Digite o seu plano de trabalho: ');
switch(plano){
	case "A":
	var aumento = (salarioA*10)/100;
	var novoSalario = (salarioA + aumento).toFixed(2);
		document.write('De acordo com as regras de aumento, seu novo salário será de: R$ '+novoSalario+".<br> Salário atual: R$ "+salarioA+".00.<br> Aumento de 10% : R$ "+aumento+".00.");
		break;

	case "B":
	var aumento = (salarioA*15)/100;
	var novoSalario = (salarioB + aumento).toFixed(2);
		document.write('De acordo com as regras de aumento, seu novo salário será de: R$ '+novoSalario+".<br> Salário atual: R$ "+salarioB+".00.<br> Aumento de 15% : R$ "+aumento+".00.");
		break;
	case "C":
	var aumento = (salarioA*20)/100;
	var novoSalario = (salarioC + aumento).toFixed(2);

		document.write('De acordo com as regras de aumento, seu novo salário será de: R$ '+novoSalario+".<br> Salário atual: R$ "+salarioC+".00.<br> Aumento de 20% : R$ "+aumento+".00.");
		break;
}