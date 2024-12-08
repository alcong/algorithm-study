## 문제

[605. Can Place Flowers](https://leetcode.com/problems/can-place-flowers/description/?envType=study-plan-v2&envId=leetcode-75)

## 해결 방법

시작과 끝에 대해서만 예외적으로 처리해주고
(i-1), i, (i+1)에 대한 경우에 대해서 빠짐 없이 화분을 놓아보면 된다.

## 흥미로운 풀이

left와 right에 대해서 bool로 비교해서 예외처리 부분도 제거해줬다.

```cpp
class Solution {
public:
    bool canPlaceFlowers(vector<int>& flowerbed, int n) {
        int len = flowerbed.size();
        for (int i = 0; i < len; i++) {
            bool left = i == 0 || flowerbed[i - 1] == 0;
            bool right = i == len - 1 || flowerbed[i + 1] == 0;

            if (left && right && flowerbed[i] == 0) {
                flowerbed[i] = 1;
                n--;
            }
        }
        return n <= 0;
    }
};
```
