# Воспользуйтесь приведенными выше примерами, для нового варианта программы Ставки,
# в котором пользователь вводит ставку (0 или 1), а компьютер генерирует случайное число,
# равное 0 или 1 для печати сообщений:
# Вы выиграли! - если компьютер сгенерирует такое же число, в противном случае сообщение - Вы проиграли!

import random  # Импортируем рандом

number_user = int(input("Введите число 1 или 0: "))  # Запрашиваем ввод у пользователя
number_computer = random.randint(0, 1)  # Генерируем число 1 или 0
print(number_computer)
# Проверяем
if number_user == number_computer:  # Если числа совпадают => выйграли
    print("Вы выиграли!")
if number_computer != number_user:  # Если совпадения нет  => проиграли
    print("Вы проиграли!")

# 1.  Составить линейную программу, печатающую значение true, если указанное высказывание является
# истинным, и false – в противном случае: сумма двух первых цифр введенного четырехзначного числа равна сумме двух
# его последних цифр.

num = input('Введите четырехзначное число: ')  # Запрашиваем ввод числа
# Проверяем
if (int(num[0]) + int(num[1])) == (int(num[2]) + int(num[3])):
    print("True")
else:
    print("False")

# 2.    Составить линейную программу, печатающую значение true,
# если указанное высказывание является истинным,
# и false – в противном случае: в заданном натуральном трехзначном числе N имеется четная цифра.

num = input('Введите трехзначное число: ')  # Запрашиваем ввод числа
flag = False  # Флаг
# Цикл по введенной строке
for i in range(3):
    if int(num[i]) % 2 == 0:  # Ищем четную цифру
        flag = True  # Если оно найдено, ставим флаг в true
        break  # Выходим из цикла
if flag:
    print("True")
else:
    print("False")
