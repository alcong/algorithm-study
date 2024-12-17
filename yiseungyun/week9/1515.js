const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input;

readline.on('line', (line) => {
  input = line;
  readline.close();
}).on('close', () => {
  const result = solution(input);
  console.log(result);
  process.exit();
});

const solution = (input) => {
  let number = 1;
  let idx = 0;

  while (idx < input.length) {
    for (let i = 0; i < number.toString().length; i++) {
      if (input[idx] === number.toString()[i]) {
        idx++;
      }
    }
    if (idx === input.length) return number;
    number++;
  }

  return number;
}