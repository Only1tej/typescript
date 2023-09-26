"use strict";
function getArrayItem(item) {
    return item[2];
}
let number = getArrayItem([1, 2, 3, 4, 5]);
console.log(number);
let someStr = getArrayItem(["Hi", "Hello", "Hey"]);
console.log(someStr);
let someBool = getArrayItem([false, true, true]);
console.log(someBool);
