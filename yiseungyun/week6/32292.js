const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const result = solution(input);
  console.log(result.join("\n"));
  process.exit();
});

const solution = (input) => {
  let result = [];

  const T = Number(input[0]);
  for (let i = 1; i < T+1; i++) {
    let string = input[i*2];
    while (/ABB/.test(string)) {
      string = string.replaceAll("ABB", "BA")
    }
    result.push(string.replaceAll("ABB", "BA"));
  }

  return result;
}