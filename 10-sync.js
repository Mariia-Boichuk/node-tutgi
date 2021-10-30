const { readFileSync, writeFileSync } = require("fs");
console.log("start");

first = readFileSync("./content/first.txt", "utf-8");
second = readFileSync("./content/second.txt", "utf-8");
console.log(first, second);

writeFileSync("./content/res.txt", `here is result ${first} and,,, ${second}`, {
  flag: "a",
});

console.log("done");
