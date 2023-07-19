const { readFileSync, writeFileSync } = require("fs");

console.log("readFileSync", readFileSync);

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

writeFileSync(
  "./content/subfolder/result-sync.txt",
  "Here is the result " + first + "\b" + second
);

const result = readFileSync("./content/subfolder/result-sync.txt", "utf-8");

console.log("result", result);
