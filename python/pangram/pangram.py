def is_pangram(sentence):
    alphabet = range(97, 123)
    for index in alphabet:
        if chr(index) not in sentence.lower():
            return False
    return True
