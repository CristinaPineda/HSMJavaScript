
function insereTexto(){
    document.getElementById('selecaoCombustivel').value = 'Gasolina';
    document.getElementById('valorLitro').value = 4.19;
    alert('Digite a quantidade de litros ou o valor que quer usar para comprar combustível!')
}

function insereTexto2(){
    document.getElementById('selecaoCombustivel').value = 'Álcool';
    document.getElementById('valorLitro').value = 3.16;
    alert('Digite a quantidade de litros ou o valor que quer usar para comprar combustível!')
}

function calculaValorPagar(){
    if(document.getElementById("litrosPagar").value != ''){
        total = (document.getElementById('valorLitro').value * document.getElementById('litrosPagar').value).toFixed(2);
        document.getElementById('valorPagar').value = total;
    }else{
        total1 = (document.getElementById('valorPagar').value / document.getElementById('valorLitro').value).toFixed(2);
        document.getElementById('litrosPagar').value = total1;
    }
    
}
