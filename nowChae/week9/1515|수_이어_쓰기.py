import sys
input = sys.stdin.readline

number_string = input().strip()

cnt = 0
status = True

while status:
    cnt += 1
    cnt_string = str(cnt)
    for c in cnt_string:
        if number_string[0] == c:
            if len(number_string) == 1:
                status = False
                break
            number_string = number_string[1:]

print(cnt)