## 문제

[238](https://leetcode.com/problems/product-of-array-except-self/?envType=study-plan-v2&envId=leetcode-75)

## 해결 방법

- O(N)에 해결하기 위해 분기를 나눠본다.
- 사전에 0을 제외한 모든 수를 곱한 값을 구한다.
- 0이 2개 -> 모든 값은 0이다.
- 0이 1개 -> 0을 제외한 모든 값은 0이다. 0인 경우 모든 값을 곱한 값을 출력
- 0이 없음 -> 모든 값을 곱한 값에서 각 원소의 나누기 값을 출력한다.
