"use strict";
const course = {
    name: "TS",
    price: 10.99,
};
let product = {
    name: "JS",
    price: 9.99,
};
function getCourseInfo(course, info) {
    return course[info];
}
let courseName = getCourseInfo(course, "name");
let coursePrice = getCourseInfo(course, "price");
console.log(courseName);
console.log(coursePrice);
