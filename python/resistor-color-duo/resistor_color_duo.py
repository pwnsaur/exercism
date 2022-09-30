color_list = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]


def value(colors):
    code = ''
    for color in colors:
        if color in color_list:
            code += str(color_list.index(color))
    return int(code[:2])
