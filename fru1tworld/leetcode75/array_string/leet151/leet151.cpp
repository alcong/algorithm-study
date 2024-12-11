class Solution {
public:
    string reverseWords(string s) {
        vector<string> strArray;
        string temp = "";
        string ans = "";
        for(char x : s){
            if(x != ' '){
                temp += x; 
            }else if(temp != ""){
                strArray.push_back(temp);
                temp = "";
            }
        }
        if(temp != "") strArray.push_back(temp);

        reverse(strArray.begin(), strArray.end());
        for(int i=0; i<strArray.size(); i++){
            string x = strArray[i];
            ans += x;
            if(i != strArray.size() -1) ans += ' ';    
        }
        return ans; 
    }
};