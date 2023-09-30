"use strict";
function getProductInfo(id, name, category) {
    return {
        id: id,
        name: name,
        category: category,
    };
}
const cat = { name: "George" };
const dog = cat;
console.log(dog.name);
const product = {
    name: "TS",
    price: 10.99,
};
console.log(product);
