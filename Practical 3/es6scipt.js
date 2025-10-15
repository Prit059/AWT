
// ES6 version
// Use const and let
const users = ["Alice", "Bob", "Charlie"];

const addUser = user => {
  users.push(user);
};

const printUsers = () => {
  for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
  }
};

// Spread operator example
const newUsers = ["Eve", "Frank"];
const allUsers = [...users, ...newUsers];
console.log("All users:", allUsers);

// Promise instead of callback
const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Modern data loaded");
    }, 1000);
  });
};

// Using async/await (ES2017+)
const fetchData = async () => {
  try {
    const result = await getData();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
};

// Class example
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  printDetails() {
    console.log(`Name: ${this.name}, Email: ${this.email}`);
  }
}

// Usage
addUser("Dave");
printUsers();
fetchData();

const user1 = new User("Prit", "prit@gmail.com");
user1.printDetails();
