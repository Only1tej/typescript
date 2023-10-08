"use strict";
var StudentDetails;
(function (StudentDetails) {
    StudentDetails[StudentDetails["ID"] = 1] = "ID";
    StudentDetails["Name"] = "John";
    StudentDetails["Major"] = "Arts";
})(StudentDetails || (StudentDetails = {}));
let studentID = 1;
let studentName = "John";
let studentMajor = "Arts";
console.log(studentID, studentName, studentMajor);
console.log(`${studentID} - ${studentName} has a major in ${studentMajor}`);
