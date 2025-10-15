const products = [
  { id: 1, name: "Laptop", price: 50000, category: "Electronics" },
  { id: 2, name: "Shoes", price: 3000, category: "Footwear" },
  { id: 3, name: "Phone", price: 25000, category: "Electronics" }
];
// Add a New Product Using spread operator 

function addProduct(newProduct) {
  products.push({ ...newProduct });
}

addProduct({ id: 4, name: "Watch", price: 1500, category: "Accessories" });
console.log(products);


function Separateprice(product){
  // return product.map(({price, ...rest}) => ({price, ...rest}));
  return product.map( ({price, ...rest}) => {
    return { price, ...rest};
  })
}

let p = Separateprice(products);

console.log(p);

function totalcartvalue(product){
  return product.reduce((total, {price}) => {
    total+=price;
    return total;
  }, 0);
}

let total = totalcartvalue(products);
console.log(total);

