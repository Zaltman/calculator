let output = 0;
let num1 = 0;
let num2 = 0;
let operator;

function add(num1, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  output = num1 + num2;

  return updateOutput(output);
}

function subtract(num1, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  output = num1 - num2;
  return updateOutput(output);
}

function multiply(num1, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  output = num1 * num2;
  return updateOutput(output);
}

function divide(num1, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  output = num1 / num2;
  return updateOutput(output);
}

function operate(operator, num1, num2) {
  if (operator == '+') add(num1, num2);
  if (operator == '-') subtract(num1, num2);
  if (operator == '*') multiply(num1, num2);
  if (operator == '/') divide(num1, num2);
}

function updateOutput() {
  outputScreen.textContent = +parseFloat(output).toFixed(14);
  if (outputScreen.textContent == 'Infinity')
    outputScreen.textContent = 'Not possible';
}

function cleanMemory() {
  output = 0;
  outputScreen.textContent = 0;
  num1 = 0;
  num2 = 0;
  operator = undefined;
}

function cleanScreen() {
  outputScreen.textContent = '';
  output = 0;
}

function equals() {
  if (num2 == 0) num2 = parseFloat(output);
  output = parseFloat(operate(operator, num1, num2));
  num1 = outputScreen.textContent;
  output = outputScreen.textContent;
}

const numberKeys = document.querySelectorAll('.button');
numberKeys.forEach((button) => {
  button.addEventListener('click', function (e) {
    keypress = document.querySelector(`button[data-key="${e}"]`);
    output += this.textContent;
    updateOutput();
  });
});

const operatorKeys = document.querySelectorAll('.buttonOperator');
operatorKeys.forEach((button) => {
  button.addEventListener('click', function (e) {
    equals();
    keypress = document.querySelector(`button[data-key="${e}"]`);
    operator = this.textContent;
    num1 = parseFloat(output);
    cleanScreen();
    num2 = 0;
  });
  num1 = parseFloat(output);
});

let outputScreen = document.querySelector('#result');

const equalsKey = document.querySelector('#equalsButton');
equalsKey.addEventListener('click', equals);

const clearKey = document.querySelector('#clearButton');
clearKey.addEventListener('click', cleanMemory);
