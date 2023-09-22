"use strict";
let productName;
productName = (product, price = 10.99) => {
    return `${product}, ${price}`;
};
console.log(productName("TS Bootcamp"));
