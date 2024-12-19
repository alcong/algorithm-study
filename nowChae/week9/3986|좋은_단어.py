import sys
input = sys.stdin.readline

N = int(input())

result = 0

def good_word(word):
    stack = []
    for w in word:
        if len(stack) == 0:
            stack.append(w)
        else:
            if stack[-1] == w:
                stack.pop()
            else:
                stack.append(w)
    
    if len(stack):
        return False
    
    return True

for _ in range(N):
    word = input().strip()
    
    if good_word(word):
        result += 1

print(result)

