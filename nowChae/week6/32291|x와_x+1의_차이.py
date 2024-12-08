import sys
input = sys.stdin.readline

k = int(input())

result = [1]

for i in range(2, int((k+1)**0.5)+1):
    r = (k+1) // i
    if (k+1) % i == 0:
        result.append(i)
        if not (r == i):
            result.append(r)
print(*sorted(result))