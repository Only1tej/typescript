// type Product = {
//     name: string
// }
// let course : Product = {
//     name: 'Bootcamp'
//     price: 10.99
// }

//.............................................
// type Product = {
//   [k: string]: string;
//   [courseName: string]: string;
// };

// let course: Product = {
//   TS: "TS Bootcamp",
//   JS: "JS Bootcamp",
//   Python: "Python Bootcamp",
// };

//-----------------------------
// type Product = {
//   [isPriced: string]: boolean;
//   released: boolean;
// };

// let course: Product = {
//     TS: true,
//     JS: true,
//     AS: true,
//     LS: true,
//     PS: true,
//     released: true,
//     OS: true
// }

//-------------------------------
// type Product = {
//   [price: string]: number;
//   released: boolean;
// };

// let course: Product = {
//   TS: true,
//   JS: true,
//   released: true,
// };

//----------------------------------------
// type Product = {
//   [k: string]: {
//     name: string;
//     price: number;
//   };
// };

// let course: Product = {
//   TS: { name: "TS Bootcamp", price: 10.99 },
//   JS: { name: "JS Bootcamp", price: 9.99 },
//   OS: { name: "OS Bootcamp", price: 11.99 },
// };
