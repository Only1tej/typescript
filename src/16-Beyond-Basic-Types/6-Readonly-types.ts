// type Product = {
//   readonly name: string;
//   price: number;
// };

// const course: Readonly<Product> = {
//   name: "TS",
//   price: 10.99,
// };

//  OR

// type Product = Readonly<{
//   name: string;
//   price: number;
// }>;
// or
// type ReadOnlyProduct = Readonly<{ name: string; price: number }>;
// const course: Product = {
//   name: "TS",
//   price: 10.99,
// };

// console.log(course);
// course.name = "JS";
