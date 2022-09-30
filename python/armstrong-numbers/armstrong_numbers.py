def is_armstrong_number(number):
    str_num = str(number)
    exponent = len(str_num)
    result = 0
    for digit in str_num:
        result += int(digit) ** exponent
    return result == number
