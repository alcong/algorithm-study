## 문제

[334](https://leetcode.com/problems/increasing-triplet-subsequence/?envType=study-plan-v2&envId=leetcode-75)

## 해결 방법

- a,b를 int 적당한 최대값으로 설정하고

```cpp
        for(auto x : nums){
            if(x <= min1) min1 = x;
            else if(x <= min2) min2 = x;
            else return true;
        }
```

다음과 같은 로직을 구성하면 x는 min1, min2이라는 뜻이므로 true를 반환하면 된다.
