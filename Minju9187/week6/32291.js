let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
// let input = fs.readFileSync("2.txt").toString().split("\n");

const a = Number(input);
const b = a + 1;
const arr = [];

for (let i = 1; i <= Math.sqrt(b); i++) {
  if (b % i === 0) {
    arr.push(i);
    if (i !== b / i) {
      arr.push(b / i);
    }
  }
}

arr.sort((a, b) => a - b).pop();

console.log(arr.join(" "));
