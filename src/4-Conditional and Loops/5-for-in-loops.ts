let data: (string | number)[] = ["Cosmos", 15, 23, "Star"];

for (let dataPoint in data) {
  //   console.log(dataPoint);
  //   console.log(typeof dataPoint); // + === parseInt() - (used to convert string to number)
  //   console.log(typeof +dataPoint);
  console.log(`${+dataPoint + 1}- ${data[dataPoint]}`);
}
