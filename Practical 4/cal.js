function factorialCalculator(n){
  if(n==0 || n==1){
    return 1;
  }
  else{
    return factorialCalculator(n-1)*n;
  }
}

function calculateFactorial() {
  const fact = document.getElementById('n1').value
  if(isNaN(fact) || fact < 0){
   const r = document.getElementById("result")
   r.innerHTML = "Invalid Input"
   r.style.color = "red"
   return;
  }
  const res = factorialCalculator(fact)
  document.getElementById("result").innerHTML = res;
}


function fibonacciCalculator(n){
  if(n==0 || n==1){
    return 1;
  }
  else{
    return fibonacciCalculator(n-1)+fibonacciCalculator(n-2);
  }
} 

function calculateFibonacci(){
  const fib = document.getElementById('n2').value
  if(isNaN(fib) || fib < 0){
   const r = document.getElementById("result1")
   r.innerHTML = "Invalid Input"
   r.style.color = "red"
   return;
  }
  else{
    const res1 = fibonacciCalculator(fib)
    document.getElementById("result1").innerHTML = res1;
  }
}
// const f = factorialCalculator(5)
// console.log(f);


// ---------- nested functions 
// Using function declaration
// function outer() {
//   const a = 10;
  
//   function inner(){
//     let a =20
//     console.log(a);
//   }
  
//   inner();
// }

// outer();
