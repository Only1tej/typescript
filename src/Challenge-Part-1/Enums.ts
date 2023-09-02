//Challenge 1
//Create an enum of product name and display it on the console
enum Product {
  product1 = "Apple",
  product2 = "Dell",
  product3 = "Lenovo",
}
console.log(Product);

//Challenge 2
// Create an enum of product IDs and display it on the console
enum ProductID {
  Apple = 1,
  Dell,
  Lenovo,
}
console.log(ProductID);

//Challenge 3
//Create a favorite product enum that is going to contain one of our product (from the previously created enums) and show it in the console
enum FavoriteProduct {
  Name = Product.product1,
  ID = ProductID.Apple,
}
console.log(
  `My favorite product is ${FavoriteProduct.Name} with the ID of ${FavoriteProduct.ID}`
);
// let productName: Produc t = Product.product1;
// let productDescription: Product = Product.product2;
// console.log(productName);
// console.log(productDescription);
