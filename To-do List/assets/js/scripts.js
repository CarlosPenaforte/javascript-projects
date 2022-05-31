var todoText = document.getElementById("todoName").nodeValue;
var todoList = document.getElementById("list-container");

function addTodo() {
    const TEXT = document.createTextNode(todoText);
    todoList.appendChild(TEXT);
}

function load() {
    var button = document.getElementById("button");
    button.addEventListener("submit",addTodo,false);
}

document.addEventListener("DOMContentLoaded",load,false);
