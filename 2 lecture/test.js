const user = {
  name: "John",
  age: 30,
  email: "john@example.com"
}

// rest oprator
// const { name, ...rest} = user;
// console.log(user.name);

// console.log(rest);

function getuser({...user}){
  return Object.values(user).reduce((a,b) => {
    return a + b;
  })
}
console.log(getuser(user));