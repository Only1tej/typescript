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
