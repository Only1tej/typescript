//There are several types of type guards
//1. typeof
// function getProductPrice(product: string | number): number {
//   if (typeof product === "string") {
//     return parseInt(product);
//   }
//   return product;
// }

// const coursePrice = getProductPrice("10");
// const coursePrice = getProductPrice(9.99);
// console.log(coursePrice);

//2. instanceof
// let newDate = new Date();

// if (newDate instanceof Date) {
//   console.log("Success");
// } else {
//   console.log("Failure");
// }

//3. Specific value check
// let someValue = null;

// if (someValue === null) {
//   console.log("Success");
// } else {
//   console.log("Failure");
// }

//4. Truthy/Falsy Check
// let someValue = true;

// if (!someValue) {
//   console.log("Success");
// } else {
//   console.log("Failure");
// }

//5. Built-in method
// let someArrValue = [1, 2, 3];

// if (Array.isArray(someArrValue)) {
//   console.log("Success");
// } else {
//   console.log("Failure");
// }

//6. Property Presence Check
// let someObject = { name: "TS" };

// if ("price" in someObject) {
//   console.log("Success");
// } else {
//   console.log("Failure");
// }
