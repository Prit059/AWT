// Array Operations
let numbers = [10, 20, 30, 40, 50];

console.log("Original Array:", numbers);
console.log("Length:", numbers.length);
console.log("First Element:", numbers[0]);
console.log("Last Element:", numbers[numbers.length - 1]);

numbers.push(60);
console.log("After push:", numbers);

numbers.pop();
console.log("After pop:", numbers);

numbers.shift();
console.log("After shift:", numbers);

numbers.unshift(5);
console.log("After unshift:", numbers);

console.log("Joined Array:", numbers.join("-"));

delete numbers[2];
console.log("After delete:", numbers);

console.log("Concatenated Array:", numbers.concat([70, 80]));

let flatArray = [[1, 2], [3, 4]].flat();
console.log("Flat Array:", flatArray);

numbers.splice(1, 2, 100, 200);
console.log("After splice:", numbers);

console.log("Slice (1,3):", numbers.slice(1, 3));

// Object and Function
let person = {
    name: "John",
    age: 25,
    gender: "Male"
};

function displayPerson(p) {
    console.log("Person Details:", p.name, p.age, p.gender);
}

displayPerson(person);
