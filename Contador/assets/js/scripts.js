let count=0;
var currentNumber = document.getElementById("currentNumber");

function increment() {
    count++;
    currentNumber.innerHTML = count;
    if(count >= 0) {
        document.getElementById("currentNumber").style.color = "green";
    }
}

function decrement() {
    count--;
    currentNumber.innerHTML = count;
    if(count < 0) {
        document.getElementById("currentNumber").style.color = "red";
    }
}
