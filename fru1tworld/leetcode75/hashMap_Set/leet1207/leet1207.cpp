class Solution {
public:
    bool uniqueOccurrences(vector<int>& arr) {
        map<int, int> mp; 
        set<int> st; 
        for(auto x : arr){
            mp[x]++;
        }
        for(auto x : mp){
            st.insert(x.second); 
        }

        return st.size() == mp.size();
    }
};