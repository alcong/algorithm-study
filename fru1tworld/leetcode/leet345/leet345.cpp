class Solution {
public:
    string reverseVowels(string s) {
        int len = s.size();
        vector<bool> v(len, false);
        string vowels= "aeiouAEIOU";
        for(int i=0; i<len; i++){
            for(int j=0; j<10; j++){
                if(vowels[j] == s[i]) v[i] = true; 
            }
        }
        int l = 0; 
        int r = len-1; 
        while(l < r){
            if(v[l] == false) l++;
            if(v[r] == false) r--; 
            if(v[l] && v[r]){
                swap(s[l++], s[r--]); 
            }
        }
        return s;
    }
};