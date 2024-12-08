let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("1.txt").toString().split("\n");

const t = input.shift();
const arr = [];

for (let i = 0; i < t; i++) {
  const t = input[2 * i];
  let string = input[2 * i + 1];
  while (true) {
    const newString = string.replace("ABB", "BA");
    if (newString === string) break;
    string = newString;
  }
  arr.push(string);
}

console.log(arr.join(" "));
