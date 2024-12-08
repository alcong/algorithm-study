## 문제

[136](https://leetcode.com/problems/single-number/?envType=study-plan-v2&envId=leetcode-75)

## 해결 방법

- xor의 성질을 활용
- 같은 비트가 2번 나오면 0
- 따라서 모든 element에 대해서 xor을 수행하면 남은 숫자가 한 번 등장하는 숫자
