// //------------------------------------------------1. Map method
// console.log([1, 2, 3, 4, 5].map((item) => item.toString()));

// //-----------------------------------2. Indexed access type
// type Product = {
//   name: string;
//   price: number;
// };

// type CourseName = Product["name"];

// //------------------------------------ 3. Index signatures
// type Product = {
//   [k: string]: string;
// };

// const product: Product = {
//   TS: "TS Bootcamp",
//   JS: "JS Bootcamp",
// };
