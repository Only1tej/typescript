// import { getProductName, course } from "./TS-modules";
// import { getProductName as product, course } from "./TS-modules";

// console.log(getProductName({ productName: "TS Bootcamp" }));
// console.log(product({ productName: "TS Bootcamp" }));
// console.log(course);

//------------------------------
// import { course } from "./Re-export";
// console.log(course);

//------------------------------
// import { product, productsList } from "./utils";

// console.log(product);
// console.log(productsList);

//Default imports and exports--------------
// import defaultCourse1 from "./TS-modules";
// console.log(defaultCourse1);

// import defaultStringPython from "./TS-modules";
// console.log(defaultStringPython);

// import addOneToOne from "./TS-modules";
// console.log(addOneToOne);

//-----Export assignment and require method-------
// import cool = require("./TS-modules");
// console.log("cool", cool); //It will not log 'cos commonjs modules cannot be shown in the browser, we'll need to have like a third party module loader (like webpack or babel) that will help to view the content in the browser

//--------Conditionally loading code from a module(s)
// import { released, courseName } from "./TS-modules";

// if (released) {
//   import("./TS-modules").then(() =>
//     console.log(`The course name is ${courseName}`)
//   );
// }

//--------Importing json file--------
// import * as config from "./config.json";
// we'll need to have like a third party module loader (like webpack or babel) that will help to view the content in the browser

//--------Creating Ambient Modules-------
// Ambient modules is a TypeScript feature that allows importing libraries written in JavaScript and using them seamlessly and safely as if they were written in TypeScript. An ambient declaration file is a file that describes the module's type but doesn't contain its implementation.
// import {addition} from './ambient'
// import { addition } from "ambient";
// addition(20, 10);
// we'll need to have like a third party module loader (like webpack or babel) that will help to view the content in the browser

//--------Augmenting ambient modules-----
// import { addition } from "ambient";
// addition(20, 10);

// declare module "ambient" {
//   export function addition(): string;
// }
// addition();
// we'll need to have like a third party module loader (like webpack or babel) that will help to view the content in the browser

//-----Module resolution and tracing---
