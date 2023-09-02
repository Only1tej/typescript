"use strict";
let searchHistory = [
    "how to make money online",
    "benefit of eating gralic",
    "html css tutorial",
    "calisthenics",
];
for (let searchItem of searchHistory) {
    searchItem.split("");
    for (let entry of searchItem) {
        if (entry === "html" || entry === "css") {
            console.log("Would you like to learn how to create website for free?");
        }
        else {
            console.log("What do you want to do?");
        }
    }
}
searchHistory.map((entry) => {
    if (entry.includes("html") || entry.includes("css")) {
        console.log("Would you like to learn how to create website for free?");
    }
});
