const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let t = 0;
let count = 0;

readline
  .on("line", (line) => {
    if (count === 0) {
      t = Number(line);
    } else {
      input.push(Number(line));
      if (count === t) {
        readline.close();
      }
    }
    count++;
  })
  .on("close", () => {
    for (let i = 0; i < t; i++) {
      solution(input[i]);
    }
    process.exit();
  });

const solution = (n) => {
  const totalExp = (BigInt(n) * BigInt(n + 1)) / 2n;
  let left = 1n;
  let right = BigInt(n);

  while (left <= right) {
    const mid = (left + right) / 2n;
    const needExp = mid * (mid + 1n);

    if (needExp <= totalExp) {
      left = mid + 1n;
    } else {
      right = mid - 1n;
    }
  }

  console.log(Number(right) + 1);
};
