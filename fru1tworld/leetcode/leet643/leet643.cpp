class Solution {
public:
    double findMaxAverage(vector<int>& nums, int k) {
        int sum = 0;
        for(int i=0; i<k; i++){
            sum += nums[i];
        }
        double ans = (double)sum/k;

        for(int i=0; i<nums.size()-k; i++){
            sum += nums[i+k];
            sum -= nums[i]; 
            ans = max(ans, (double)sum/k);
        }

        return ans; 
    }
};