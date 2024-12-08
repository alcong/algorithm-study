class Solution {
public:
    vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {
        int maxCandies = *max_element(candies.begin(), candies.end());
        vector<bool> ans; 

        for(auto x : candies){
            maxCandies <= (x + extraCandies) ? 
            ans.push_back(true) : 
            ans.push_back(false);
        }
        return ans;
    }
};