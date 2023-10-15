// interface Product {
//   name: string;
//   price: number;
//   rating: number;
//   sales: number;
// }

// type PickTYPE<Type, KeyType extends keyof Type> = {
//   [Key in KeyType]: Type[Key];
// };

/**
 * From T, pick a set of properties whose keys are in the union K

type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
 */

// const product: PickTYPE<Product, "name" | "rating"> = {
//   name: "TS",
//   rating: 4.5,
// };
// console.log(product);

//According to the Typescript doc
// type ProductPreview = Pick<Product, "name" | "rating">;

// const product: Pick<Product, "name" | "rating"> = {
//   name: "TS",
//   rating: 4.5,
// };
// console.log(product);
