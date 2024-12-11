class Solution {
public:
    int maxVowels(string s, int k) {
        string vowel = "aeiou";
        int ans = 0; 
        for(int i=0; i<k; i++){
            bool check = false; 
            for(int j=0; j<5; j++){
                if(vowel[j] == s[i]) check = true;
            }
            if(check) ans++;
        }
        int temp = ans;
        for(int i=1; i<=s.size()-k; i++){
            bool front_check = false; 
            bool back_check = false;
            for(int j=0; j<5; j++){
                if(vowel[j] == s[i-1]) front_check = true;
            }
            for(int j=0; j<5; j++){
                if(vowel[j] == s[i+k-1]) back_check = true;
            }
            if(front_check) temp--;
            if(back_check) temp++;
            ans = max(ans, temp);
        }
        return ans; 

    }
};