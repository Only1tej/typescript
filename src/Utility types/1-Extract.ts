//Extract built-in utility type is used to extract a sub-part of a type based on a certain criteria. the needed part is the extracted part
type MixedTYPES =
  | "Hi"
  | 666
  | ["TS", "JS"]
  | { name: "TS"; price: number }
  | "Hey"
  | { name: "JS"; price: number }
  | 13
  | { name: "Python"; price: 11.9 }
  | [12, 13, 14, 15];

type Strings = Extract<MixedTYPES, string>;
type Numbers = Extract<MixedTYPES, number>;
type Product = Extract<MixedTYPES, { name: "TS" }>;
type Products = Extract<MixedTYPES, { price: number }>;
type ProductsArr1 = Extract<MixedTYPES, []>;
type ProductsArr2 = Extract<MixedTYPES, string[]>;
type ProductsArr3 = Extract<MixedTYPES, number[]>;
