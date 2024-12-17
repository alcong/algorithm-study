const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const result = solution(Number(input[0]), input.slice(1));
  console.log(result.join("\n"));
  process.exit();
});

const solution = (T, slimes) => {
  let result = [];

  for (let i = 0; i < T; i++) {
    const N = BigInt(slimes[i]);
    const totalExp = (N*(N+1n))/BigInt(2);

    let left = BigInt(1), right = BigInt(1000000000);
    while (left <= right) {
      const mid = (left+right)/BigInt(2);
      if (mid*(mid-BigInt(1)) <= totalExp) {
        left = mid+BigInt(1);
      } else {
        right = mid-BigInt(1); 
      }
    }

    result.push(right);
  }

  return result;
}