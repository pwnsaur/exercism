def convert(number: int) -> str:
    items = ((3, 'Pling'), (5, 'Plang'), (7, 'Plong'))
    result = ''
    for num, text in items:
        if number % num == 0:
            result += text
    if result == '':
        result = str(number)
    return result
