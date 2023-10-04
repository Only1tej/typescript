"use strict";
const courses = [
    {
        name: "JS",
        info: {
            level: "Beginner",
            noOfStudents: 2000,
        },
    },
    {
        name: "TS",
        info: {
            level: "Beginner",
            noOfStudents: undefined,
        },
    },
    {
        name: "Tailwind CSS",
        info: undefined,
    },
];
console.log(courses.map((course) => { var _a; return (_a = course.info) === null || _a === void 0 ? void 0 : _a.noOfStudents; }));
