const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input;

readline.on('line', (line) => {
  input = Number(line);
  readline.close();
}).on('close', () => {
  const result = solution(input);
  console.log(result.join(" "));
  process.exit();
});

const solution = (input) => {
  let divisor = [], result = [];

  for (let k = 1; k <= Math.sqrt(input); k++) {
    if (input % k === 0) {
      divisor.push(k);
      if (k !== input/k && input/k !== input) {
        divisor.push(input/k);
      }
    }
  }

  for (let k = 1; k <= Math.sqrt(input+1); k++) {
    if ((input+1) % k === 0) {
      divisor.push(k);
      if (k !== (input+1)/k && (input+1)/k !== input+1) {
        divisor.push((input+1)/k);
      }
    }
  }

  divisor = [...new Set(divisor)];
  divisor.forEach(num => {
    if (Math.floor(input/num) !== Math.floor((input+1)/num)) {
      result.push(num);
    }
  })

  return result.sort((a, b) => a - b); 
}