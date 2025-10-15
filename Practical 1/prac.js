let income = 1500.75;
let expense = 650.25;

function add(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  return NaN;
}

function subtract(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  }
  return NaN;
}

function multiply(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a * b;
  }
  return NaN;
}

let sum = add(income, expense);
let diff = subtract(income, expense);
let prod = multiply(income, 2);

document.getElementById('financial-output').innerHTML = `
  Income: ${income} <br>
  Expense: ${expense} <br>
  Sum: ${sum} <br>
  Difference: ${diff} <br>
  Multiplication: ${prod}
`;
