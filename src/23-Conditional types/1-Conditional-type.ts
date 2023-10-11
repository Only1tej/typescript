// let age = 10;

// const allowedToDrive = age >= 21 ? "Allowed" : "Not allowed";
// console.log(allowedToDrive);

//---------------------------------------
// type Name = string;
// type Price = number;

// type Product<T> = T extends "ProductName" ? Name : Price;

// let productName: Product<"ProductName">;
// let productPrice: Product<"ProductPrice">;
// // console.log(productName);

//Whenever you see extends in conditional statement like this, think of it like '>='
//Under the hood, this conditional types implements the keyof type query
