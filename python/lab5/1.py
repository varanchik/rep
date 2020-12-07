import re
from random import randint


s = "абкцук фкратр"
print(s.replace("а", "ого"))

list1 = [randint(2, 20) for i in range(15)]
print("Исходный список: ", list1)
print("Минимальный: ", min(list1))


def sum(s):
    sum_list = 0
    i, count = 0, len(s)
    while i < count:
        sum_list += s[i]
        i += 1
    return sum_list


def multiply(s):
    proiz_list = 1
    i, count = 0, len(s)
    while i < count:
        proiz_list *= s[i]
        i += 1
    return proiz_list


print("Сумма: ", sum(list1))
print("Произведение: ", multiply(list1))


def is_member(x, a):
    return int(x) in a


print(is_member("4", list1))

s = "Отец Онуфрий обошел огород и обнаружил огромный огурец!"
print(s)

s1 = s[1:]

replaced = re.sub(s[:1], '@', s1, flags=re.IGNORECASE)
print(s[:1] + replaced)

j, count = 0, len(list1)
while j < count:
    list1[j] = float(list1[j])
    j += 1

print(list1)

ls = [5,3,7,4,6]
print(ls)
n = int(input("Введите элемент для сдвига"))

i = len(ls) - n
ls2 = ls[i:] + ls[:i]
print(ls2)