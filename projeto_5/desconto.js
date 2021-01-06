/*
Instruções do projeto
Dependendo do valor das compras, a loja LuDas concede descontos aos seus clientes.

Crie uma função que calcule um desconto de 10% para compras de até R$499,99 e de 15% para valores acima disso.

A função deve retornar o percentual de desconto, valor do desconto em reais e o valor final a ser pago.

Suba o código para sua conta no GitHub e compartilhe o link desse projeto no campo ao lado para que outros desenvolvedores possam analisá-lo.
*/

var valorCompra =prompt("Entre com o valor da sua compra nas lojas 'LuDas' para receber seu desconto!");
descontoLuDas(valorCompra);

function descontoLuDas(valorCompra){
	if(valorCompra <= 499.99){
		var percentual = 10;
		var desconto = (valorCompra*10)/100;
		var pagarComDesconto = (valorCompra - desconto).toFixed(2);
	}else{
		var percentual = 15;
		var desconto = (valorCompra*15)/100;
		var pagarComDesconto = (valorCompra - desconto).toFixed(2);
	}
return document.write("O percentual de desconto é: "+percentual+"%.<br> O valor do desconto é: R$ "+desconto+".00.<br> O valor final a ser pago é: R$ "+pagarComDesconto+".");
}

//Cristina Pineda.