/*
Instruções do projeto
Crie um programa que tenta adivinhar a carta que o jogador está pensando. Ele deve exibir uma mensagem inicial, 
convidando o usuário a pensar em uma carta do baralho.

Use o método exibir() para mostrar cartas aleatórias, uma de cada vez. 
O jogador deve responder de maneira positiva ou negativa à cada carta exibida e 
o programa será encerrado quando o jogo apresentar a carta imaginada pelo usuário.

Suba o código para sua conta no GitHub e compartilhe o link 
desse projeto no campo ao lado para que outros desenvolvedores possam analisá-lo.
*/

alert('Pense agora em uma carta de baralho que tentaremos advinhar qual é a carta!!!');

do{
	var cartas = ["As", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Valete", "Dama", "Rei"];
	var naipes = [" de Espadas.", " de Paus.", " de Copas.", " de Ouros."];	
	
	var carta = cartas[Math.floor(Math.random()* cartas.length)]; // o Math.floor retorna o menor numero dentro de um parametro...
	var naipe = naipes[Math.floor(Math.random()* naipes.length)]; // ...nesse caso ele está com um parametro randomico que usa o tamanho da lista de cartas e naipes.
	var cartaEnaipe = carta + naipe;
	
	var correta = prompt('A carta escolhida foi: '+ cartaEnaipe + " Está correto? ");
	
}while(correta == 'Não' || correta == 'não' || correta == 'nao');



//Cristina Pineda. 








	





