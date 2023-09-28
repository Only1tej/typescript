"use strict";
function productView(arg) {
    if ((typeof arg === "number" && arg > 0) || arg === true) {
        return true;
    }
    else {
        return false;
    }
}
function arrayOrItem(elements) {
    if (Array.isArray(elements)) {
        return elements[0];
    }
    else {
        return elements;
    }
}
console.log(arrayOrItem([1, 2, 3, 4]));
console.log(arrayOrItem([false, true, false]));
console.log(arrayOrItem(["Hi", "Hey", "Hello"]));
console.log(arrayOrItem("What's up"));
function myFunc(employeeOrEmployees) {
    if (Array.isArray(employeeOrEmployees)) {
        return employeeOrEmployees.length;
    }
    else {
        return employeeOrEmployees.name;
    }
}
