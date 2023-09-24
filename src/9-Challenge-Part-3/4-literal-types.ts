//Challenge 1
//What will the following function invocation results in?
// function courseName(): string {
//   return "TS";
// }

// let typeScript: "TS" = courseName();
//type TS is not thesame with type string (type compilation error)

//Challenge 2
//What will the result of variable favBook be?
// type BookType =
//   | "And the mountains echoed"
//   | "The kite runner"
//   | "A thousand splendid suns";

// let favBook: BookType = "The kite runner";
// console.log(favBook);

//Challenge 3
//What will the result of variable favBook be?
// type BookType =
//   | "And the mountains echoed"
//   | "The kite runner"
//   | "A thousand splendid suns";

// let favBook: BookType = "The Shining";
//Type The Shining is not assignable to Type BookType

//Challenge 4
//What is going to be the result of assignment of false to bool
// let bool: true = false;
//(Compilation error)Type false is not assignable to type true
