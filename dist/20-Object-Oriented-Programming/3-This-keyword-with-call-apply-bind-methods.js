"use strict";
const person = {
    objFunc() {
        console.log("Object noni", this);
    },
};
class Test {
    classFunc() {
        console.log("class", this);
    }
}
let test = new Test();
