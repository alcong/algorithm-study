class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        result = ""
        if len(str1) < len(str2):
            gcd = str2
        else:
            gcd = str1
            
        while len(gcd) > 0:
            if str1.replace(gcd, "") == "" and str2.replace(gcd, "") == "":
                result = gcd
                break
            gcd = gcd[:-1]
        return result