function ProductInfo(callback){
  const product = {
    name: "Laptop",
    price: 1000,
  }

  callback(product);
}


function statusCheck(data){
  console.log(data);
}

ProductInfo(statusCheck);