let result = 0;
let input = 0;
function add(input) {
  input = parseInt(input);
  result += input;
  resultLine.textContent = result;
}
function subtract(input) {
  result -= input;
  resultLine.textContent = result;
}
function multiply(input) {
  result *= input;
  resultLine.textContent = result;
}
function divide(input) {
  result /= input;
  resultLine.textContent = result;
}
function operate(num2, operator) {
  if (operator == '+') {
    add(num2);
  }
  if (operator == '-') {
    subtract(num2);
  }
  if (operator == '*') {
    multiply(num2);
  }
  if (operator == '/') {
    divide(num2);
  }
}

let resultLine = document.getElementById('result');
resultLine.textContent = result;

let buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    console.log(e);
  });
});

window.addEventListener('keydown', function (e) {
  const keypress = document.querySelector(`button[data-key="${e.key}"]`);
  if (keypress.className == 'button') {
    if (resultLine.textContent == 0) {
      resultLine.textContent = '';
    }

    result = e.key;

    resultLine.textContent += result;
    console.log(keypress);
  }
  if (keypress.className == 'buttonOperator') {
    result = resultLine.textContent;
    result = parseInt(result);
    console.log(typeof result);
    add(result);
  }

  // console.log(e);
});

// button.addEventListener('click', function (e) {
//   console.log(e);
