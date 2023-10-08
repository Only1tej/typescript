"use strict";
let holidaySales1 = function (product, sales, tax, discount) {
    let price = 0;
    if (product === "pens")
        price = 29;
    if (product === "erasers")
        price = 19;
    if (product === "pencils")
        price = 59;
    let totalSalesForIndividualProduct = price * sales;
    return (totalSalesForIndividualProduct -
        tax * totalSalesForIndividualProduct -
        discount * totalSalesForIndividualProduct);
};
const pens = holidaySales1("pens", 20, 0.15, 0.25);
const erasers = holidaySales1("erasers", 15, 0.12, 0.15);
const pencils = holidaySales1("pencils", 50, 0.08, 0.45);
console.log(`The total profit from the sales of pens is $${pens}`);
console.log(`The total profit from the sales of erasers is $${erasers}`);
console.log(`The total profit from the sales of pencils is $${pencils}`);
