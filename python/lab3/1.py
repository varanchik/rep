# Переменная s получает строку. Создать строку s1 из символов гласных букв строки s
# Создать строку из цифр строки s

# Гласные
x = ('а', 'е', 'и', 'о', 'у', 'ё', 'ю', 'я')

# Цифры
x1 = ('1', '2', '3', '4', '5', '6', '7', '8', '9', '0')

# Исходная строка s
s = "ыдп24оен золото4и76"

# Строка для гласных и цифр
s1 = s2 = ""

# Перебор строки
for letter in s:
    # Если буква в списке гласных
    if letter in x:
        # Записываем в строку букву
        s1 += letter + " "
    # Если цифра в списке цифр
    if letter in x1:
        # Записываем в строку цифру
        s2 += letter + " "
print("Исходная строка: ", s)
print("Строка s1 из гласных: ", s1)
print("Строка s1 из цифр: ", s2)

# Write a Python program to count the number of characters (character frequency) in a string.
# len() - длина строки, s.count(" ") - количетсов пробелов
# len() - s.count(" ") : количество символов без пробелов
print("Число символов в строке: ", len(s) - s.count(' '))


# Функция перевода на поросячий язык
# Принимает два аргумента: исходная строка source_string и список гласных букв, возвращает "переведенную строку"
def PigLanguageTranslation(source_string, temp_x):
    # Сюда кладем результат
    result = ""
    # Перебор строки
    for word in source_string:
        # Если буква в списке гласных
        if word in temp_x:
            # Записываем в строку букву
            result += word + "хрю"
        else:
            result += word
    return result


translation_string = PigLanguageTranslation(s, x)
print("Строка после перевода: ", translation_string)
