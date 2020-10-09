def slices(series, length):
    if not series:
        raise ValueError('empty series')
    if (length > len(series)) | (length <= 0):
        raise ValueError('invalid input ')

    substrings = []
    for i in range(len(series) - (length - 1)):
        substrings.append(series[i:i + length])
    return substrings
