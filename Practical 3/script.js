// // function
// function sum(a,b){ return a+b;}

// // arrow function
// const sumArrow = (a,b) => {
//     return a + b;
// };
// // Legacy code


// var users = ["Alice", "Bob", "Charlie"];

// function addUser(user) {
//   users.push(user);
// }

// function printUsers() {
//   for (var i = 0; i < users.length; i++) {
//     console.log(users[i]);
//   }
// }

// // Async example
// function getData(callback) {
//   setTimeout(function() {
//     callback("Legacy data loaded");
//   }, 1000);
// }

// addUser("Dave");
// printUsers();

// getData(function(result) {
//   console.log(result);
// });


// sum(1,2);
// sumArrow(1,2);
const greet = name => `Hello, ${name}`;

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

class Student {
  constructor(name) {
    this.name = name;
  }
  introduce() {
    return `Hi, I'm ${this.name}`;
  }
}

const student = new Student('Alice');

new Promise((resolve, reject) => {
  resolve('Promise Resolved Successfully');
}).then(msg => {
  document.getElementById('es6-output').innerHTML = `
    Greet: ${greet('Bob')} <br>
    Array: ${arr2.join(', ')} <br>
    Student: ${student.introduce()} <br>
    Promise: ${msg}
  `;
});
