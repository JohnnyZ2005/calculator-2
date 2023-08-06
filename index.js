// getting necessary elements 
const lastOperation = document.querySelector('.last-operation');
const currentOperation = document.querySelector('.current-operation');
const numberbuttons = document.querySelectorAll('.number-button');
const operatorButtons = document.querySelectorAll('.operator-button');
const icon = document.getElementById("icon");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const equalButton = document.getElementById('equal');
const dotButton = document.getElementById('dot')
let firstNumber;
let secondNumber;
let currentOperationResult = null;
let shouldReset = function () {
    currentOperation.textContent = ''
}
// Adding event listeners
icon.addEventListener('click', toggleTheme);
numberbuttons.forEach((button) => {
    button.addEventListener('click', () => appendNumber(button.textContent));
});
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => updateDomOnOperatorClick(button.textContent))
});
clearButton.addEventListener('click', clearNumber);
deleteButton.addEventListener('click', deleteNumber);
equalButton.addEventListener('click', equalTo);
dotButton.addEventListener('click', appendPoint)

// displaying number 
function appendNumber(value) {
    if (currentOperation.textContent === "0") {
        currentOperation.textContent = '';
    }
    currentOperation.textContent += value;
} 

// append point 
function appendPoint() {
    if (currentOperation.textContent === '') currentOperation.textContent = '0'
    if (currentOperation.textContent.includes('')) return currentOperation.textContent += '.'
}

// updating the dom when operator button is clicked 
function updateDomOnOperatorClick(operator) {
    if (currentOperationResult !== null) equalTo()
    firstNumber = Number(currentOperation.textContent)
    currentOperationResult = operator
    lastOperation.textContent = `${firstNumber} ${currentOperationResult}`;
    shouldReset();
}

// clearing all number 
function clearNumber() {
    currentOperation.textContent = "";
    lastOperation.textContent = "";
}
// deleting a value 
function deleteNumber() {
    currentOperation.textContent = currentOperation.textContent.toString().slice(0, -1)
    // if user wants to delete operator 
    // let newNumber = lastOperation.textContent;
    // const deleteLastELement = Number(newNumber.slice(0, -1));
    // currentOperation.textContent = deleteLastELement;
}

// equal to 
function equalTo(){
    secondNumber = Number(currentOperation.textContent);
    if (currentOperationResult === '/' && secondNumber === 0) {
        alert('No number is divisible by Zero');
        return
    }
    if (currentOperationResult === null) {
        return;
    }
    currentOperation.textContent = roundResult(operate(firstNumber, currentOperationResult, secondNumber));
    lastOperation.textContent = `${firstNumber} ${currentOperationResult} ${secondNumber} =`;
    currentOperationResult = null
}


// operation 
function operate(firstNum, operator, secondNum) {
    switch (operator) {
        case "+":
            return add(firstNum, secondNum);
            break;
        case "-":
            return substract(firstNum, secondNum);
            break;
        case "*":
            return multiply(firstNum, secondNum);
            break;
        case "/":
            return divide(firstNum, secondNum);
            break;
        default:
            return "Invalid Operator";
            break
    }
}

// Rounding result
function roundResult(number){
    return Math.round(number * 1000)/ 1000
}

// Handling all mathematical operations 
function add(a,b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
function divide(a,b) {
    return a / b;
}
function multiply(a,b) {
    return a * b;
}
 
// function to change the icons 
function changeIcons() {
    if (icon.src.endsWith('sun.png')) {
        icon.src = "images/moon.png";
    } else {
        icon.src = "images/sun.png";
    }
}
// function to toggle theme 
function toggleTheme() {
    document.body.classList.toggle("light-theme");
    changeIcons();
}
