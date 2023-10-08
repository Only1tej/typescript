"use strict";
var Employees;
(function (Employees) {
    Employees["Name"] = "John Smith";
    Employees["Job"] = "Developer";
})(Employees || (Employees = {}));
console.log(Employees);
function getEmployeeInfo(employee) {
    return employee;
}
console.log(getEmployeeInfo(Employees.Name));
console.log(getEmployeeInfo(Employees.Job));
