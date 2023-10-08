"use strict";
var Products;
(function (Products) {
    Products[Products["TS Bootcamp"] = 1] = "TS Bootcamp";
    Products[Products["JS Bootcamp"] = 2] = "JS Bootcamp";
    Products[Products["Python Bootcamp"] = 3] = "Python Bootcamp";
    Products[Products["CSS Layout"] = 4] = "CSS Layout";
    Products[Products["Flexbox Grid course"] = 5] = "Flexbox Grid course";
})(Products || (Products = {}));
function setCoursePrice(course) {
    switch (course) {
        case Products["TS Bootcamp"]:
            return "$25.99";
        case Products["JS Bootcamp"]:
            return "$29.99";
        case Products["Python Bootcamp"]:
            return "$12.55";
        case Products["CSS Layout"]:
            return "$10.45";
        case Products["Flexbox Grid course"]:
            return "$16.56";
        default:
            return courseWarning(course);
    }
}
function courseWarning(course) {
    throw new Error(`The ${course} course has no price yet.`);
}
console.log(setCoursePrice(Products["TS Bootcamp"]));
console.log(setCoursePrice(Products["JS Bootcamp"]));
console.log(setCoursePrice(Products["Flexbox Grid course"]));
