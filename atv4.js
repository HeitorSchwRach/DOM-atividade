document.getElementById('bt_concluir').addEventListener('click', checkPalpite)


const RandomNumber = Math.floor(Math.random() * 100) + 1;
console.log (RandomNumber)

function checkPalpite() {
    const palpiteInput = document.getElementById('input_numero');
    const input_numero = palpiteInput.value
    

    if (input_numero < 1 || input_numero > 100) {
        alert('Por favor insira um número entre 1 e 100')
        return
    }


    if (input_numero < RandomNumber) {
       alert ('Muito Baixo! Tente Novamente')
       document.getElementById("Palpites").innerHTML+=`${input_numero} - baixo<br>` 
    } else if (input_numero > RandomNumber){
        document.getElementById("Palpites").innerHTML+=`${input_numero} - alto<br>`
    } else{
        alert ('Parabéns! Você acertou')
    }

}




