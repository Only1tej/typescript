"use strict";
let myArr = ["a", "b"];
let myBool = [true, false];
let myStringArr = [
    ["hey", "hi", "heyyo"],
    ["hello", "there"],
];
function someArr() {
    let numArr = [];
    numArr.push(15);
    numArr.push(35);
    return numArr;
}
console.log(someArr());
console.log("Hello");
function someArray() {
    let numArr = [];
    numArr.push([15]);
    numArr.push([35]);
    return numArr;
}
console.log(someArray());
function someStrings() {
    let strArr = [];
    strArr.push(["Hi"]);
    strArr.push(["Hello", "Typescript"], ["Typescript"]);
    return strArr;
}
console.log(someStrings());
let longArr = [
    [[[1, 2], ["C#"], ["JS", "Java"], ["HTML", "CSS", "TS"]]],
];
console.log(longArr);
console.log(longArr[0]);
console.log(longArr[0][0]);
console.log(longArr[0][0][3]);
console.log(longArr[0][0][3][2]);
