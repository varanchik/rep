# Создать список целых чисел s
# Задание А
# Вывести элементы списка, которые болье третьего элемента

s = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]             # Список целых чисел

print("Задание А\nИсходный список: ", s)
print("Третий элемент: ", s[2])

print("Элементы больше третьего: ")             # Цикл по элементам списка, ищем элементы больше третьего и выводим
for element in s:                               # Проходим по элементам списка
    if element > s[2]:
        print(element, end = " ")

# Задание Б
# Поменять первый и последний элемент местами

s[-1], s[0] = s[0], s[-1]                       #Воспользуемся срезом
print("\nЗадание Б\nСписок после перестановки первого и последнего элементов: ", s)

# Задание В
# Скопировать четные элементы в список s1

s1 = s.copy()                                   # Копируем список в список s1
s1 = list(filter(lambda x: not int(x) % 2, s1)) # Оставляем только четные элементы
print("Список s1: ", s1)                        # Выводим на печать