document.getElementById('bt_tarefa').addEventListener('click', addTarefa)

function addTarefa(){
    const inputTarefa = document.getElementById('input_tarefa').value
    if (!inputTarefa){
        alert('O input está vazio')
        return

    }
    const elemento_tarefa =  document.createElement('li')
elemento_tarefa.className = 'item_tarefa'

const conteudoTarefa = document.createElement('p')
conteudoTarefa.textContent = inputTarefa
elemento_tarefa.appendChild(conteudoTarefa)
document.getElementById('lista_tarefas').appendChild(elemento_tarefa)
const botaoDeletar = document.createElement('button')
botaoDeletar.textContent = 'Deletar tarefa'
elemento_tarefa.appendChild(botaoDeletar)
botaoDeletar.addEventListener('click', ()=>{
    elemento_tarefa.remove
})
const botaoCompletar = documet.createElement('button')
botaoCompletar.textContent = 'Completar Tarefa'
botaoCompletar.addEventListener('click', () => {
    conteudoTarefa.classList.toggle('completada')
})
elemento_tarefa.appendChild(botaoCompletar)
}


