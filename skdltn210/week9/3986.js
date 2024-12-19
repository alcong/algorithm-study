const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let n;
let count = 0;
let ans = 0;

readline
  .on("line", (line) => {
    if (!n) {
      n = parseInt(line);
    } else {
      input.push(line);
      count++;
      if (count === n) {
        readline.close();
      }
    }
  })
  .on("close", () => {
    solution(input);
    console.log(ans);
    process.exit();
  });

const solution = (input) => {
  for (let i = 0; i < input.length; i++) {
    let stack = [];
    for (let j = 0; j < input[i].length; j++) {
      if (stack.length === 0) {
        stack.push(input[i][j]);
      } else {
        if (stack[stack.length - 1] === input[i][j]) {
          stack.pop();
        } else {
          stack.push(input[i][j]);
        }
      }
    }
    if (stack.length === 0) {
      ans++;
    }
  }
};
