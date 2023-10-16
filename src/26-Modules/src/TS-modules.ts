// export function getProductName({
//   productName,
// }: {
//   productName: string;
// }): string {
//   return productName;
// }
// console.log(getProductName({ productName: "TS Bootcamp" }));

//------------------------------------
// function getProductName({ productName }: { productName: string }): string {
//   return productName;
// }
//Export statement
// export { getProductName };
// export { getProductName as Product };

// const course = {
//   name: "TS",
//   price: 10.99,
// };

// export { getProductName, course };

// getProductName({ productName: "TS Bootcamp" });

//--------------------------------------

// export const course = {
//   name: "TS",
//   price: 10.99,
// };

//Default exports and import---------------------

// const course1 = {
//   name: "TS",
//   price: 10.99,
// };

// export default course1;

// export default "Python Bootcamp";

// export default {
//   name: "TS",
//   price: 10.99,
// };

// export default 1 + 1;

//------Export assignment--------(doesn't work with es2015 syntax)
//Limitations
// 1. You can't have multiple exports with export assignment, it has to be the only exports
// 2. Export assignment cannot be re-exported
// export = "cool";

//--------Conditionally loading code from a module(s)
// export const released = true;
// export const courseName = "TS Bootcamp";

//--------Creating Ambient Modules-------
// Ambient modules is a TypeScript feature that allows importing libraries written in JavaScript and using them seamlessly and safely as if they were written in TypeScript. An ambient declaration file is a file that describes the module's type but doesn't contain its implementation.

//--------Augmenting ambient modules-----

//------Module Resolution and tracing----
function getProductName({ productName }: { productName: string }): string {
  return productName;
}

const course = {
  name: "TS",
  price: 10.99,
};

export { getProductName, course };
