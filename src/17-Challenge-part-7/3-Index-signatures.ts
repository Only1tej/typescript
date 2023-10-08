//Challenge 1
//What will the productObject log?
// type Products = {
//   [price: string]: number;
//   name: string;
// };
// const products: Products = {
//   name: "TS Bootcamp",
//   price: 10.99,
// };
//If the take away of the index signature is type number, all the properties that are following it has to be of type number

//Challenge 2
//Create an index signature that maps a product name a string to a product price of type number or undefined, then create an object from this type.
type Productss = {
  [name: string]: number | undefined;
};

const products: Productss = {
  TS: 10.99,
  JS: 9.99,
  Remix: undefined,
};

//Challenge 3
//What will the product of this log?
type Product = {
  [price: string]: number;
  noOfStudents: number;
};

// const product: Product = {
//   FlexBox: 10.99,
//   noOfStudents: 42.0,
// };
// console.log(product);
