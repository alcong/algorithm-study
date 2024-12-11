class Solution {
public:
    int minFlips(int a, int b, int c) {
        int ans = 0; 
        for(int i=0; i<=30; i++){
            int bit = (1<<i);
            if( ((a|b) & bit) ^ (c & bit) ){
                if(c&bit) ans++;
                else ans += (a & bit) == ( b & bit) ?  2 : 1;
            }
        }
        return ans;
    }
};