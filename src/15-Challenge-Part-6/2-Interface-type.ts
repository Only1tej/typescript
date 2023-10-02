//Challenge 1
//Create a product interface with three properties, name, id and category. Then create a function that extract all this properties values and the return type of the function should be the specific interface.
// interface Product {
//   readonly id: number;
//   name: string;
//   category: string;
// }

// function getProductInfo(id: number, name: string, category: string): Product {
//   return {
//     id: id,
//     name: name,
//     category: category,
//   };
// }

// let product: Product = getProductInfo(1, "Qwik", "Technology");
// console.log(product);

//Challenge 2
//What is going to be the value of the dog name?
// type Cat = {
//   name: string;
// };

// interface Dog {
//   name: string;
// }

// const cat: Cat = { name: "George" };
// const dog: Dog = cat;

// console.log(dog.name);

//Challenge 3
//Create an interface of product name, and then create an interface of product price that extends the Product name interface and finally create an object from that interface.
// interface ProductName {
//   name: string;
// }

// interface ProductPrice extends ProductName {
//   price: number;
// }

// const product: ProductPrice = {
//   name: "TS",
//   price: 10.99,
// };

//Challenge 4
//Create a type of Product name, an interface of product price extending the Product name and then create an object from that.
// type ProductName = {
//   name: string;
// };

// interface ProductPrice extends ProductName {
//   price: number;
// }

// const product: ProductPrice = {
//   name: "TS",
//   price: 10.99,
// };
// console.log(product);
