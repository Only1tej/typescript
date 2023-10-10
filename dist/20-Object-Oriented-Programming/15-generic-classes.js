"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
const product1 = new Product("TS Bootcamp", 11.99);
const product2 = new Product("JS Bootcamp", "$11.99");
const product3 = new Product("Tailwind Bootcamp", "Not available");
console.log(product1);
console.log(product2);
console.log(product3);
