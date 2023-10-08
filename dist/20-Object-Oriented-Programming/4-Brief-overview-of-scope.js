"use strict";
function myFunc() {
    var num = 10;
    let num1 = 12;
    console.log(num);
    console.log(num1);
}
myFunc();
{
    var nums2 = 100;
    let nums3 = 200;
    const nums4 = 300;
    console.log("var inside the block", nums2);
    console.log("let inside the block", nums3);
    console.log("consts inside the block", nums4);
}
console.log("var outside the block", nums2);
