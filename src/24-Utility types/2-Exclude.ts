//Exclude built-in utility type allow us to get the sub-part of a type by specifying what we donot need, by excluding the type that we don't need, we end up with the type we want.
type MixedTYPESS =
  | "Hi"
  | 666
  | ["TS", "JS"]
  | { name: "TS"; price: number }
  | "Hey"
  | { name: "JS"; price: number }
  | 13
  | { name: "Python"; price: 11.9 }
  | [12, 13, 14, 15];

type NotStrings = Exclude<MixedTYPESS, string>;
type NotNumbers = Exclude<MixedTYPESS, number>;
type NotProduct = Exclude<MixedTYPESS, { name: "TS" }>;
type NotPrice = Exclude<MixedTYPESS, { price: number }>;
type NotProductArr1 = Exclude<MixedTYPESS, []>;
type NotProductArr2 = Exclude<MixedTYPESS, string[]>;
type NotProductArr3 = Exclude<MixedTYPESS, number[]>;
