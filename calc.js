// calculator.js
let currentInput = '';
let previousInput = '';
let operation = null;

const resultDisplay = document.getElementById('result');

function appendNumber(number) {
    if (resultDisplay.value.includes('.') && number === '.') return; // Prevent multiple dots
    resultDisplay.value = resultDisplay.value.toString() + number.toString();
}

function setOperator(operator) {
    if (resultDisplay.value === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operation = operator;
    previousInput = resultDisplay.value;
    currentInput = '';
    resultDisplay.value = '';
}

function calculate() {
    currentInput = resultDisplay.value;
    let computation;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Division by zero is undefined.");
                return;
            }
            computation = prev / current;
            break;
        default:
            return;
    }
    resultDisplay.value = computation;
    operation = undefined;
    previousInput = '';
}

function clearResult() {
    resultDisplay.value = '';
    currentInput = '';
    previousInput = '';
    operation = null;
}
