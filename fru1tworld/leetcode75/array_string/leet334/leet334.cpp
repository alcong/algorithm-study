class Solution {
public:
    bool increasingTriplet(vector<int>& nums) {
        int min1 = 2147483647; 
        int min2 = 2147483647;
        for(auto x : nums){
            if(x <= min1) min1 = x;
            else if(x <= min2) min2 = x; 
            else return true; 
        }   
        return false;
    }
};