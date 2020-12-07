# 1. Создать функцию, получающую в качестве параметра строку, состоящую из целых чисел,
# разделенных запятыми и возвращающую первое число и срез строки без первого числа и первой запятой.

# 2. Создать функцию, получающую в качестве параметров три целых числа и определяющую,
# лежит ли третье число между первым и вторым, т.е. возвращающее true, если лежит и false в противном случае.

def intervalCheck(a, b, c):
    if a <= c <= b:
        return True
    elif b <= c <= a:
        return True
    else:
        return False


print(intervalCheck(1, 2, 2)) # True
print(intervalCheck(9, 20, 1)) # False
print(intervalCheck(2, 8, 4)) # True

# 3. Создать функцию, получающую в качестве параметра строку из букв и
# возвращающую число строчных и число прописных букв.

def countLowersUppers(str):
    uppers = lowers = 0
    for i in str:
        if i.isalpha():
            if i.islower():
                lowers += 1
            else:
                uppers += 1
    return {'прописных':uppers,'строчных': lowers};
print(countLowersUppers(input('Введите строку:')))

# 4. Создать функцию, получающую в качестве параметра целое число и возвращающее true,
# если число простое и false в противном случае.

def isPrime(n):
    if n % 2 == 0:
        return n == 2
    d = 3
    while d * d <= n and n % d != 0:
        d += 2
    return d * d > n

print(isPrime(3)) # True - простое
print(isPrime(4)) # False - не простое
print(isPrime(2)) # True - простое 