document.getElementById('bt_tarefa').addEventListener('click', addTarefa)

let listaTarefas = JSON.parse(localStorage.getItem('tarefas'))|| []

listaTarefas.forEach(element => {
    criarElemento(element)
});

function addTarefa(){
    const inputTarefa = document.getElementById('input_tarefa').value
    if (!inputTarefa){
        alert('O input está vazio')
        return

    }

    listaTarefas.push(inputTarefa)

    localStorage.setItem('tarefas', JSON.stringify(listaTarefas))
    criarElemento(inputTarefa)

}

function criarElemento(inputTarefa){
    document.getElementById('input_tarefa').value = ""
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
        elemento_tarefa.remove()
        listaTarefas = listaTarefas.filter((tarefa) => tarefa !== inputTarefa)
        localStorage.setItem('tarefa', JSON.stringify(listaTarefas))
    })
    const botaoCompletar = document.createElement('button')
    botaoCompletar.textContent = 'Completar Tarefa'
    botaoCompletar.addEventListener('click', () => {
        conteudoTarefa.classList.toggle('completada')
    })
    elemento_tarefa.appendChild(botaoCompletar)
    }


