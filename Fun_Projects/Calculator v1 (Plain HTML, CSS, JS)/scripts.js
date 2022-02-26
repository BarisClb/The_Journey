const keypad = document.querySelector(".key-pad");
const screen1 = document.querySelector(".screen-1")
const screen2 = document.querySelector(".screen-2");
const screen3 = document.querySelector(".operation-screen");
const operations = document.querySelector(".operations-pad");

let num1 = "";
let num2 = "";
let operation = "";

eventListeners();

function eventListeners() {
    keypad.addEventListener("click", addNum);
    operations.addEventListener("click", operateOrEqual);
}

function addNum(e) {
    num1 += Number(e.target.id);
    screen1.textContent = num1;
}

function operateOrEqual(e) {
    if (e.target.id == "=") {
        equals(e)
    }
    else {
        operating(e)
    }
}

function operating(e) {
    if (num1 === "") {
    }
    else if (operation === "") {
        num2 = num1;
        num1 = "";
        
        screen1.textContent = num1;
        screen2.textContent = num2;
        
        operation += e.target.id;
        screen3.textContent = e.target.id;
    }
    else {
        operation = e.target.id;
        screen3.textContent = e.target.id;
    }
}

function equals(e) {
    let answer = "";

    if (operation == "+") {
        answer = Number(num2) + Number(num1);
    }
    else if (operation == "-") {
        answer = Number(num2) - Number(num1);
    }
    else if (operation == "*") {
        answer = Number(num2) * Number(num1);
    }
    else {
        answer = Number(num2) / Number(num1);
    }
    
    num1 = answer;
    screen1.textContent = num1;

    num2 = "";
    screen2.textContent = num2;

    operation = "";
    screen3.textContent = operation;
}

window.addEventListener("click",showme);

function showme(e) {
    console.log(operation)
}
