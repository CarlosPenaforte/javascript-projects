var todoText = document.getElementById("todoName");
var todoList = document.getElementById("list-container");

function addTodo() {
    //create div;
    var newDiv = document.createElement("div");
    newDiv.setAttribute("id","todo");
    var title = document.getElementById("title");
    //create checkbox;
    var newCheckbox = document.createElement("input");
    newCheckbox.setAttribute("type","checkbox");
    newCheckbox.setAttribute("id","checkbox");
    newDiv.appendChild(newCheckbox);
    //create label;
    var label = document.createElement("label");
    label.setAttribute("id","label");
    var text = document.createTextNode(todoText.value);
    label.appendChild(text);
    newDiv.appendChild(label);
    title.parentNode.insertBefore(newDiv,title.nextSibling);
}

function load() {
    var button = document.getElementById("button");
    button.addEventListener("click",addTodo,false);
}

document.addEventListener("DOMContentLoaded",load,false);
