"use strict";
function getCoursesInfo(course) {
    return course;
}
let courses = getCoursesInfo({
    course_1: { name: "TS", price: 10.99 },
    course_2: { name: "JS", price: 11.99 },
    course_3: { name: "Tailwind", price: 12.99 },
    course_4: { name: "Python", price: 16.99 },
});
console.log(courses);
