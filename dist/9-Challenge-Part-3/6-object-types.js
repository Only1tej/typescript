"use strict";
let myCourse = {
    name: "TS Bootcamp",
    platform: "Udemy",
    features: ["practical", "Excercise oriented", "Modern TS concepts"],
    "meta-data": {
        published: true,
    },
};
const check = myCourse["meta-data"]["published"];
console.log(check);
const check2 = myCourse["meta-data"].published;
console.log(check2);
