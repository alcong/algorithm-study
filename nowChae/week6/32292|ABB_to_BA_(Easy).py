import sys
input = sys.stdin.readline

t = int(input())
for i in range(t):
    count = int(input())
    word = input().strip()
    
    while "ABB" in word:
        word = word.replace("ABB", "BA")
    print(word)