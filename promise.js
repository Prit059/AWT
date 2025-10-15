// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let success = true;
//     if(success){
//       resolve('success');
//     }else{
//       reject('failed');
//     }
//   },2000)
// })

// promise.then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// })

// let promise = new Promise((resolve, reject) => {

//     console.log('Product status inquiry');
//     const data = {
//       ID: 1,
//       Name: 'Phone'
//     };

//     setTimeout(() => {
//       console.log('Checking product status...');
//       resolve(data);
//     }, 2000)
//     if(!data){
//       reject('Product not found');
//     }
//   }
// )

// promise.then((result) => {
//   console.log(result);
// })
// .catch((error) => {
//   console.log(error);
// })



let promise = new Promise((reslove,reject) => {
  console.log('Product status inquiry');
  const product = [{
    ID: 1,
    Name: 'Phone',
    review: 4
  }];


  setTimeout(() => {
    console.log('Checking Customer reviews...');
    reslove(product.review);
  })
  
})

promise.then((result) => {
  console.log(result);
})
.catch((error) => {
  console.log(error);
})