def sdvig5(n):
    return int(n) + 5


def symInStr(s, down, up):
    sum = 0
    up += 1
    s1 = s[down:up:2]
    for element in s1:
        sum += int(element)
    return sum


def find3(s):
    res = s.split(",")
    res_new = []
    for val in res:
        val = val.strip()
        res_new.append(int(val))
    max_list = None
    max_index = 0
    for x in range(len(res_new) - 2):
        s1 = res_new[x] + res_new[x + 1] + res_new[x + 2]
        if (max_list is None) or (s1 > max_list):
            max_list = s1
            max_index = x
    return max_index, max_index + 1, max_index + 2


def isPrime(n):
    if n % 2 == 0:
        return n == 2
    d = 3
    while d * d <= n and n % d != 0:
        d += 2
    return d * d > n
