## 문제

For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

### 문제 링크

https://leetcode.com/problems/greatest-common-divisor-of-strings/description/?envType=study-plan-v2&envId=leetcode-75

---

## 해결 방법

str1 str2 둘 중 길이가 짧은 값을 시작 gcd로 두고, 길이를 줄여가면서 gcd가 str1, str2를 모두 빈 문자열로 대체 해버리는 경우를 찾으면 된다. 가장 긴 gcd를 찾고 있기 때문에 가장 먼저 빈 문자열을 대체해버리는 경우가 정답이 된다.
