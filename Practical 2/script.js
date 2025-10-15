/*
  You are building a user management system. Store user ages in an array
and apply various operations. Create an object representing a user profile
and a method to print user details.
*/ 

let userage = [16,18,19,23,21,20,30]

// Push fuction

userage.push(25);
console.log(userage);

// Pop function
userage.pop();
console.log(userage);

// Shift function
userage.shift();
console.log(userage);

// splice function
userage.splice(2,1,23);
console.log(userage);

userage.map((age, index) => {
  console.log(`User ${index + 1} is ${age} years old.`);  
});


// Create user profile object

let userprofile = {
  name: "Prit",
  age: 17,
  email: "prit@gmail.com",
  location: "Earth",
};

console.log(userprofile);


// sort function 

userage.sort((a,b) => a-b);
console.log(userage);

//filter function 
let filteredUsers = userage.filter((age) => age >=20);
console.log(filteredUsers);

// Dynamic method to print user details

userprofile.phone = "123-456-7890";
console.log(userprofile);

userprofile.age = 18;
console.log(userprofile);

const createUserForm = document.getElementById("userForm");
createUserForm.addEventListener("submit", function(e){

  e.preventDefault(); // Prevent form submission
  const name = document.getElementById("username").value;
  const age = parseInt(document.getElementById("age").value);
  const email = document.getElementById("email").value;
  // const location = document.getElementById("location").value;

  let newuser = {
    name:name,
    age:age,
    email:email,
  }
  console.log(newuser);
  
  let userDetails = document.getElementById("userDetails");

  userDetails.innerHTML += `<p>Name: ${newuser.name},<br/> Age: ${newuser.age},<br/> Email: ${newuser.email}</p>`;

})