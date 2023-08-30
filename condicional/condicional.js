function media() {
    var val1 = document.getElementById('valor1').value; 
    var val2 = document.getElementById('valor2').value; 
    var result = (parseInt(val1) + parseInt(val2)) / 2;

    if(result == 10) {
        alert('Caramba! sua média foi ' + result + ', Parabéns!')
    }

    if(result == 0) {
        alert('Saia do celular!')
    }

    else if(result >= 6) {
        alert('Sua Média foi ' + result + ', Aprovado!')
    }

    else {
        alert('Sua Média foi ' + result + ', Reprovado!')
    }
    
}
function comparacao() {
    var val1 = document.getElementById('valor1').value; 
    var val2 = document.getElementById('valor2').value; 
    
    if(val1==val2) {
        alert('Os valores são iguais')
    }

    else if(val1 > val2) {

        alert('O valor 1 é maior que o valor 2')
        }
    else {
        alert('O valor 2 é maior que o valor 1')
    }
}    