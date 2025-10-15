// function fetchData(callback){
//   console.log('fetching data...');
  
//   setTimeout(() => {
//     const data = {name:'Prit', age:19};
//     console.log('fetch request..');
//     callback(null, data); // Passing data
//   }, 2000)
//   console.log('fetching data.......');

// }

// function handleData(error, data){
//   if(error){
//     console.log(error);
//   }else{
//     console.log(data);
//   }
// }

// fetchData(handleData);

function first(callback){
  setTimeout(() => {
    console.log('first');
    callback();
  }, 2000);
}
function second(callback){
  setTimeout(() => {
    console.log('second');
    callback();
  }, 1000);
}
function third(callback){
  setTimeout(() => {
    console.log('third');
    callback();
  }, 3000);
}
console.log('Starting');
first(() => {
  second (() => {
    third(() => {
      console.log('End');
    })
  })
})
