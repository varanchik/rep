# Минитест ЛР3-2(функции)

# 1. Создать функцию, которая получает через параметры строку символов и
#    положительное целое n. Функция возвращает n-кратную строку.

def defString(source_string, n):
    return source_string[:n]

print(defString("Мама мыла раму", 4))

# 2. Создать функцию, которая получает через параметры 3 числа, и возвращает
#    их сумму или утроенную сумму если они равны друг другу

def sumNum(a,b,c):
    if (a == c) and (a == b):
        return 3*(a+b+c)
    else:
        return a+b+c
print("1,1,1: ", sumNum(1,1,1))
print("2,3,5: ", sumNum(2,3,5))

# 3. Создать функцию, которая получает через параметр строку символов.
#    Если первые два символа равны Is, то функция возвращает ту же строку.
#    Иначе возвращает строку с добавленным в начале Is.

def checkIs(source_string):
    if source_string[:2] == "Is":
        return source_string
    else:
        return "Is " +  source_string

print("Строка на входе без Is: ", checkIs("мама мыла раму"))
print("Строка с Is на входе: ", checkIs("Isмама мыла раму"))