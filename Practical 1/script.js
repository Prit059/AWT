let revenue = 500000;
let expenses = 200000;
let taxRate = 0.05;

function validNumber(value){
  if(typeof value === "number" && !isNaN(value)){
    return value;
  } else {
    return 0;
  }
}

function financialCalculation(a, b){
  return validNumber(a) + validNumber(b);
}

function profitCalculation(a, b){
  return validNumber(a) - validNumber(b);
}

function taxCalculation(a, b){
  return validNumber(a) * validNumber(b);
}

const sum = financialCalculation(revenue, expenses);
const profit = profitCalculation(revenue, expenses);
const incometax = taxCalculation(profit, taxRate);

const result = document.getElementById("result");
result.innerHTML = `Revenue: ${revenue} <br/> Expenses: ${expenses} <br/> Profit: ${profit} <br/> Tax-Rate: ${taxRate} <br/> Tax: ${incometax}`;

document.getElementById("sumname").innerHTML = `Sum of Revenue and Expenses`;
document.getElementById("sum").innerHTML = `Sum = ${sum}`;
document.getElementById("tax").innerHTML = `Tax = ${incometax}`;
document.getElementById("profit").innerHTML = `Profit = ${profit}`;