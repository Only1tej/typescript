let mixData: (string | number)[] = ["Cosmos", 15, 16, "Star"];

// for (let item of mixData) console.log(item);

// for (let item of mixData.entries()) console.log(item[0], item[1]);

for (let [i, item] of mixData.entries()) {
  //   console.log(`${i + 1}-${item}`);
}
