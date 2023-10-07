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
function addition(a, b) {
    console.log("Function", this, a + b);
}
let operation1 = addition.bind({ name: "Johan" }, 25, 35);
let operation2 = addition.bind({ name: "Johanna" }, 250, 350);
operation1();
operation2();
