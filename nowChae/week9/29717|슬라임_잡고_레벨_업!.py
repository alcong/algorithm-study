import sys
input = sys.stdin.readline

T = int(input())

def level(slime):
    total_xp = (( slime + 1 ) * slime ) // 2
    
    left = 1
    right = slime

    while left <= right:
        middle = (left + right) // 2

        if middle * (middle + 1) > total_xp:
            right = middle - 1
        elif middle * (middle + 1) <= total_xp:
            left = middle + 1
    
    return left 

for _ in range(T):
    slime = int(input())
    print(level(slime))

