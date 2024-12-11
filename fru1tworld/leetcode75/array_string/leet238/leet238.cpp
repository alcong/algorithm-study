class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int product = 1;
        int len = nums.size();
        vector<int> ans;
        int cntZero = 0;
        for (auto x : nums) {
            if (!x) cntZero++;
            else product *= (long long)x;
        }

        if (cntZero > 1) {
            for(auto x : nums) ans.push_back(0);
        } else {
            for (auto x : nums) {
                if(!cntZero) ans.push_back(product / x);
                else x ? ans.push_back(0) : ans.push_back(product);
            }
        }

        return ans;
    }
};