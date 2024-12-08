class Solution {
public:
    bool canPlaceFlowers(vector<int>& flowerbed, int n) {
        
        if(flowerbed.front() == 0){
            if(flowerbed.size() == 1) n--; 
            else if(flowerbed[1] == 0) n--; 
            flowerbed.front() = 1;
        }
        if(flowerbed.back() == 0){
            if(flowerbed.size() > 1 && flowerbed[flowerbed.size() - 2] == 0){
                flowerbed.back() = 1; 
                n--; 
            }
         }
        for(int i=1; i<flowerbed.size()-1; i++){
            if(flowerbed[i] == 0){
                int l = flowerbed[i-1];
                int r = flowerbed[i+1];
                if(r + l == 0){
                    flowerbed[i]++;
                    n--;
                }
            }
        }
        return n <= 0;
    }
};