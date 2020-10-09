def classify(number):
    if number >= 1:
        factors = 0
        for num in range(1, number):
            if number % num == 0:
                factors += num
        if factors == number:
            return 'perfect'
        elif factors < number:
            return 'deficient'
        else:
            return 'abundant'
    else:
        raise ValueError('I CAN HAZ CHEEZBURGER')
