const textoInput = document.getElementById('tag') // Referindo Id do Input
const botao = document.getElementById('tag2') //Referindo id do boão
const mensagem = document.getElementsByTagName('p') // Referindo p

botao.addEventListener("click", function(){
    const valorTexto = textoInput.value;
    if(valorTexto == ""){
    mensagem[0].textContent = 'Escreva alguma coisa'
    }else {
        mensagem[0].textContent = `voce escreveu: ${valorTexto}`
    }


})
