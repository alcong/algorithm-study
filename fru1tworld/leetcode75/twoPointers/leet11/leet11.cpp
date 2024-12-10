class Solution {
public:
    int maxArea(vector<int>& height) {
        int ans = 0;
        int len = height.size();
        int l = 0;
        int r = len-1; 
        while(l<r){
            int temp = min(height[l], height[r]) * (r-l);
            ans = max(ans, temp);
            if(height[l] < height[r]){
                l++;
                continue;
            }else{
                r--;
            }
        }

        return ans; 
    }
};