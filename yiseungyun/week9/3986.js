const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const result = solution(Number(input[0]), input.slice(1));
  console.log(result);
  process.exit();
});

const solution = (N, words) => {
  let count = 0;

  for (const word of words) {
    let stack = [];
    for (const w of word) {
      if (stack.length > 0 && stack[stack.length-1] === w) {
        stack.pop();
      } else {
        stack.push(w);
      }
    }

    if (stack.length === 0) count++;
  }

  return count;
}