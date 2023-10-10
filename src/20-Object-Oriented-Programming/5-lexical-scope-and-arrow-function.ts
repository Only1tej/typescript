//Lexical scope is where we have access to a variable from the enclosing scope within the enclosed scope
class MyProduct {
  onlineCourse() {
    // const productName: string = "TS Bootcamp";
    // console.log(newProduct);
    // console.log(this);
    //....
    // setTimeout(function () {
    //   let newProduct: string = "Tailwind CSS Bootcamp";
    //   console.log(productName);
    //   console.log(this);
    // }, 100);
    //....
    //In arrow fucntion, this keyword will always refer to the object (myProduct), but it doesn't work with function
    // setTimeout(() => {
    //   console.log(this);
    // }, 100);
    //....
    //Small hack for the this keyword
    // let self = this;
    let that = this;
    setTimeout(function () {
      // console.log(self);
      console.log(that);
    }, 100);
  }
}

// let product = new MyProduct();
// product.onlineCourse();
