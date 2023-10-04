// const numbers: number[] = [4, 1, 5, 3, 2];
// numbers.push(6);
// numbers.sort();

//Storing by reference
// const nums = numbers;
// nums.push(7);
// console.log("Original (copy) array:", numbers);
// console.log("Original array:", numbers);

// const originalObj = { name: "TS" };
// console.log(originalObj);

// const copyObj = originalObj;
// copyObj.name = "JS";
// console.log(copyObj);
// console.log(originalObj);

//-------------------------------------------
//Storing by value
// let myName = "Muslim";
// let newName = myName;
// myName = "John";
// console.log("Original name:", myName);
// console.log("New name:", newName);

//-------------------------------------------
//Properties that change the array (such as sort(), push(), pop()) are not available in readonly arrays
const numbers: ReadonlyArray<number> = [5, 2, 3, 1];
// numbers.push()
// numbers.sort()

console.log(numbers.indexOf(1));
console.log(numbers.length);

const strings: ReadonlyArray<string> = ["Hi", "Hey"];
console.log(strings);
console.log(strings.length);
