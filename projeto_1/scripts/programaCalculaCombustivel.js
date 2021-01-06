/**

***INSTRUÇÕES DO PROJETO***


Um posto de gasolina tem a seguinte tabela de preços:

Código: 1
Álcool preço/litro: R$3,16.

Código: 2
Gasolina preço/litro: R$4,19.

Crie um programa que mostre o código do combustível escolhido, 
a quantidade dele em litros e o valor a ser pago pelo cliente. 
Aprimore-o para que ele exiba uma mensagem ao usuário caso este digite um código não existente.

O CÓDIGO ABAIXO É O SOLICITADO NO PROJETO DA HSM CODE SCHOOL
**/

var codigo = {'Álcool':1, 'Gasolina':2};
var precoAlcool = 3.16;
var precoGasolina = 4.19;
var litros = 0;
codigo = prompt("Digite um código de combustivel: ")

if(codigo == 1){
    litros = prompt('Digite a quantidade de litros: ');      
    var pagamento = (litros * precoAlcool).toFixed(2);
    document.write('Valor a pagar: '+ pagamento);
}if(codigo == 2){
    litros = prompt('Digite a quantidade de litros: '); 
    var pagamento = (litros * precoGasolina).toFixed(2);
    document.write('Valor a pagar: '+ pagamento);
}else{
	alert('Digite um código válido!')
}



