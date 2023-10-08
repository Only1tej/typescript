"use strict";
let data = ["Cosmos", 15, 23, "Star"];
for (let dataPoint in data) {
    console.log(`${+dataPoint + 1}- ${data[dataPoint]}`);
}
