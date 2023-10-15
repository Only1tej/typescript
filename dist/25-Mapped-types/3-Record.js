"use strict";
function getCoursesInfo(course) {
    return course;
}
let courses = getCoursesInfo({
    TS: { name: "TS", price: 10.99 },
    JS: { name: "JS", price: 11.99 },
    Python: { name: "Python", price: 12.99 },
    Tailwind: { name: "Tailwind", price: 5.89 },
});
console.log(courses);
