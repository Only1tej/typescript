//Challenge 1
//Create a generic function that returns its argument and test with multiple values
function returnArg<T>(elements: T): T {
  return elements;
}

console.log(returnArg("Hello"));
console.log(returnArg(12));
console.log(returnArg(true));

//Challenge 2
//Create a generic function that returns the length of an array
function returnLength<T>(elements: T[]): number {
  return elements.length;
}
console.log(returnLength(["HTML", "CSS", "TS"]));
console.log(returnLength([1, 2, 3, 4, 5, 6, 7]));

//Challenge 3
//Create a generic function that accepts generic array of strings and return the fifth item of that array
function returnStrings<T>(elements: Array<T>): T {
  return elements[4];
}
console.log(returnStrings(["a", "b", "c", "d", "e", "f"]));

//Challenge 4
//Create a generic function that accepts a generic array returning that last item of that array
function someFunc<Elements>(elements: Array<Elements>): Elements {
  return elements[elements.length - 1];
}

console.log(someFunc<number>([1, 2, 3, 4]));
console.log(someFunc<boolean>([true, false, true]));
console.log(someFunc<string>(["Hi", "Hey"]));
