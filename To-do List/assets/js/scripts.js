let count=0;
var currentNumber = document.getElementById("currentNumber");

function increment() {
    if(count<1000) {
        count++;
        currentNumber.innerHTML = count;
    }
    if(count >= 0) {
        document.getElementById("currentNumber").style.color = "green";
    }
}

function decrement() {
    if(count>-1000) {
        count--;
        currentNumber.innerHTML = count;
    }
    if(count < 0) {
        document.getElementById("currentNumber").style.color = "red";
    }
}


function load() {
    var addWrapper = document.getElementById("add");
    addWrapper.addEventListener("click",increment,false);
    var subWrapper = document.getElementById("sub");
    subWrapper.addEventListener("click",decrement,false);
}

document.addEventListener("DOMContentLoaded",load,false);
