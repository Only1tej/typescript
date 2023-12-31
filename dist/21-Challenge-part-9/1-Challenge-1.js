"use strict";
const products = ["Hat", "Jeans", "Jacket"];
const mixedStuff = products;
mixedStuff.push(13);
console.log(products);
function myFunc(arg) {
    return arg && arg.length;
}
console.log(myFunc(undefined));
console.log(myFunc(["Hi", "Hey", "Hello", "What's up", "There", "Defined"]));
function myNum(arg) {
    return arg || 1;
}
console.log(myNum(23));
console.log(myNum(undefined));
function setCoursePrice(price) {
    return price !== null && price !== void 0 ? price : 9.99;
}
console.log(setCoursePrice(12.88));
console.log(setCoursePrice(undefined));
function add(price, sales) {
    return price * (sales !== null && sales !== void 0 ? sales : 1);
}
console.log(add(9.99, 4));
console.log(add(10.99));
function APICallStatus(s) {
    const n = Number(s);
    if (Number.isNaN(n)) {
        return {
            response: "Failure",
            reason: "The string passed cannot be converted into a number",
        };
    }
    else {
        return { response: "success", value: n };
    }
}
let apiCallResult = APICallStatus("10");
console.log(apiCallResult.response === "success" ? apiCallResult.value : undefined);
