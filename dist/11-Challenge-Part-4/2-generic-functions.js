"use strict";
function returnArg(elements) {
    return elements;
}
console.log(returnArg("Hello"));
console.log(returnArg(12));
console.log(returnArg(true));
function returnLength(elements) {
    return elements.length;
}
console.log(returnLength(["HTML", "CSS", "TS"]));
console.log(returnLength([1, 2, 3, 4, 5, 6, 7]));
