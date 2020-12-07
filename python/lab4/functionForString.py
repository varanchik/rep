def strSymbol(s, bukva):
    sbuk = ""
    for x in s:
        if x == bukva:
            sbuk += x
    return sbuk
def strSymbol2(s):
    s1 = ""
    for i in filter(str.isdigit, s): s1 += i
    return s1