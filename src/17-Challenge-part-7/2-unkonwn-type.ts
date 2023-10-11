//Challenge 1
//What will be the value of movieTicketPrice?
let favMovie: unknown = "The good, the bad and the ugly";
let someMovie: any = favMovie;
let movieTicketPrice = someMovie;
console.log(movieTicketPrice);

//Challenge 2
//What will be the value of songName variable?
const favSong: unknown = "Un Dice";
const songName: string = typeof favSong === "string" ? favSong : "";
console.log(songName);

//Challenge 3
//Stop this code from compiling, because there is error prone type annotation, fix it.
// const productPrice: any = 10.99;
// const productPrice: number = 10.99;
// const courseName: string = productPrice;
// console.log(courseName);
