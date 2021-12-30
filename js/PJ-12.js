const elementoLista = document.querySelector('ul')
const elementoInput = document.querySelector('input')
const elementoBotao = document.querySelector('button')

const tarefas = []

function mostaTarefas(){

    elementoLista.innerHTML = ''

    for(tarefa of tarefas){
        const elementoTarefa = document.createElement('li')
        const textoTarefa = document.createTextNode(tarefa)

        elementoTarefa.appendChild(textoTarefa)
        elementoLista.appendChild(elementoTarefa)
    }
}

mostaTarefas()

function addTarefa(){
    const textoTarefa = elementoInput.value
    tarefas.push(textoTarefa)
    elementoInput.value = ''

    mostaTarefas()
}

elementoBotao.setAttribute('onclick', 'addTarefa()')