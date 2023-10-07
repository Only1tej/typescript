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
function returnStrings(elements) {
    return elements[4];
}
console.log(returnStrings(["a", "b", "c", "d", "e", "f"]));
function someFunc(elements) {
    return elements[elements.length - 1];
}
console.log(someFunc([1, 2, 3, 4]));
console.log(someFunc([true, false, true]));
console.log(someFunc(["Hi", "Hey"]));
