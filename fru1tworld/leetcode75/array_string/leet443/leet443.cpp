class Solution {
public:
    int compress(vector<char>& chars) {
        
        string ans = "";
        ans += chars[0];
        int len = chars.size();
        int repeat = 1; 
        for(int i=1; i<len; i++){
            if(chars[i-1] == chars[i]){
                repeat++; 
            }else{
                repeat == 1 ? ans += chars[i] : ans += to_string(repeat) + chars[i];
                repeat = 1;
            }
        }
        
        if(repeat > 1) ans += to_string(repeat);
        for(int i=0; i<ans.size(); i++) chars[i] = ans[i];
        for(int i=ans.size(); i<chars.size(); i++) chars.pop_back();


        return ans.size();
    }
};