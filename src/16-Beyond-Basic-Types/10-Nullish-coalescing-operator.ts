//AND
// console.log("" && 5);
// console.log(0 && 5);
// console.log(false && 5);
// console.log(null && 5);
// console.log(undefined && 5);
// console.log(NaN && 5);

// console.log("hi" && "hey");
// console.log("hi" && 0);
// console.log(false && 0);

//OR
// console.log("" || 5);
// console.log(0 || 5);
// console.log(false || 5);
// console.log(null || 5);
// console.log(undefined || 5);
// console.log(NaN || 5);

// console.log("hi" || "hey");
// console.log("hi" || 0);
// console.log(false || 0);

//Nullish Coalescing Operator => always return the left side of the operation as long as the left side is not null and it is not undefined, if it is null or undefined, then it returns the right side.
console.log("" ?? 5);
console.log(0 ?? 5);
console.log(false ?? 5);
console.log(null ?? 5);
console.log(undefined ?? 5);
console.log(NaN ?? 5);

console.log("hi" ?? "hey");
console.log("hi" ?? 0);
console.log(false ?? 0);

//Null coalescing operator
// Null => null
//Undefined => null-ish
