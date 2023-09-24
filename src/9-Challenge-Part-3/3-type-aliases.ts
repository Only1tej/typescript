//Challenge 1
//Create a custom type and assign it both of the boolean value
type BoolValues = true | false;

//Challenge 2
//What will be the value for the variable 'score'
// type Score = number;
// let avgScore: string = "11.5";
// let score: Score = avgScore;
//number != string
//This will be a complational because type string is not assignable to type number

//Challenge 3
//What will be the value for the variable 'score'
type Score = number;
let avgScore: number = 11.5;
let score: Score = avgScore;
console.log(score);
