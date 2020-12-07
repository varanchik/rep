from random import randint

ls = ["234", "pool", "car", "85743", "hat"]
print(ls)
ls2 = []

i = 0
count = len(ls) - 2
while i < count:
    if ls[i].isdigit():
        ls2.append(ls.pop(i))
    i += 1
print(ls)
print(ls2)

list1 = [randint(1, 200) for i in range(1000)]
list2 = [randint(0, 199) for i in range(30)]
list3 = []
i = 0
count = len(list2) - 1
while i < count:
    list3.append(list1[list2[i]])
    i += 1
print(list1)
print(list3)


def g(spis):
    temp_list = []
    for element in spis:
        if len(element) < 4:
            temp_list.append("")
        else:
            temp_list.append(element[:2] + element[-2:])
    return temp_list


f = ['mixmax', 'xyz', 'apple', 'xanadu', 'aardvark']
print(f)
print(g(f))
