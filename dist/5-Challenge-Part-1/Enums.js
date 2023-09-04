"use strict";
var Product;
(function (Product) {
    Product["product1"] = "Apple";
    Product["product2"] = "Dell";
    Product["product3"] = "Lenovo";
})(Product || (Product = {}));
console.log(Product);
var ProductID;
(function (ProductID) {
    ProductID[ProductID["Apple"] = 1] = "Apple";
    ProductID[ProductID["Dell"] = 2] = "Dell";
    ProductID[ProductID["Lenovo"] = 3] = "Lenovo";
})(ProductID || (ProductID = {}));
console.log(ProductID);
var FavoriteProduct;
(function (FavoriteProduct) {
    FavoriteProduct["Name"] = "Apple";
    FavoriteProduct[FavoriteProduct["ID"] = 1] = "ID";
})(FavoriteProduct || (FavoriteProduct = {}));
console.log(`My favorite product is ${FavoriteProduct.Name} with the ID of ${FavoriteProduct.ID}`);
