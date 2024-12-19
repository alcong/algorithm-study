## 문제

You are given an integer array nums, an integer k, and an integer multiplier.

You need to perform k operations on nums. In each operation:

Find the minimum value x in nums. If there are multiple occurrences of the minimum value, select the one that appears first.
Replace the selected minimum value x with x \* multiplier.
Return an integer array denoting the final state of nums after performing all k operations.

### 문제 링크

https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/description/?envType=daily-question&envId=2024-12-16

---

## 해결 방법

리스트에서 가장 작은 값의 인덱스를 찾고, 해당하는 값에 mutiplier 값을 곱하는 걸 k 만큼 반복해주면 풀 수 있었다.
