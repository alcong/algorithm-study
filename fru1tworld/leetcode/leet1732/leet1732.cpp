class Solution {
public:
    int largestAltitude(vector<int>& gain) {
        vector<int> v(gain.size()+1, 0);

        for(int i=1; i<=gain.size(); i++){
            v[i] = v[i-1] + gain[i-1];
        }
        int ans = *max_element(v.begin(), v.end());
        return ans;
    }
};