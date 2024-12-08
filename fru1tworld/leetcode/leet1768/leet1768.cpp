class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        int index1 = 0;
        int index2 = 0; 
        string ans = "";
        
        int minLen = min(word1.size(), word2.size());
        int maxLen = max(word1.size(), word2.size());

        for(int i=0; i<minLen; i++){
            ans += word1[i];
            ans += word2[i];
        }
        for(int i=minLen; i<maxLen; i++){
            if(word1.size() == maxLen){
                ans += word1[i];
            }else{
                ans += word2[i];
            }
         }   
        
        return ans; 
    }
};