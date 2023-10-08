"use strict";
class MyProduct {
    onlineCourse() {
        let that = this;
        setTimeout(function () {
            console.log(that);
        }, 100);
    }
}
let product = new MyProduct();
product.onlineCourse();
