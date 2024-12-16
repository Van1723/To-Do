var lista = document.querySelector(".to-do ul#list")
var inputTodo = document.querySelector(".to-do #entradaDados")
var buttonTodo = document.querySelector(".to-do #add")
var tarefas = JSON.parse(localStorage.getItem("lista-tarefas")) || [];

function listarToDo(){

    lista.innerHTML= "";
    
    
    for( tarefa of tarefas){
        console.log(tarefas);
        var tarefaElemente = document.createElement('li');
        tarefaElemente.setAttribute("class","lilista");
        var tarefaText = document.createTextNode(tarefa);
        linkElement = document.createElement("a");
        linkElement.setAttribute("href","#");
        var posicao = tarefas.indexOf(tarefa);

        linkElement.setAttribute("onclick", "removeTarefa('+ posicao +')");

        var linktext = document.createTextNode(" Excluir ");
        linkElement.appendChild(linktext);

        tarefaElemente.appendChild(tarefaText);
        tarefaElemente.appendChild(linkElement);
        lista.appendChild(tarefaElemente);

        
        
        
    }
    
    
    
}
listarToDo();

function AddToDo(){

    if(inputTodo.value ==""){
        alert("Digite alguma tarefa")
        return false;
    } else{
    var todotext = inputTodo.value;
    
    tarefas.push(todotext);
    inputTodo.value = "";
    listarToDo();
    salvarDados();
    }


}

function removeTarefa(posicao){
    tarefas.splice(posicao,1);
    listarToDo();
    salvarDados()

}
function salvarDados(){
    localStorage.setItem("lista-tarefas",JSON.stringify( tarefas));

}