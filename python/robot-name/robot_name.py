import random
import string

robot_names = set()


class Robot:
    def __init__(self):
        random.seed()
        self.name = self.generate_name()

    def generate_name(self):
        letters = ''.join(random.sample(string.ascii_uppercase, 2))
        digits = ''.join(random.sample(string.digits, 3))
        self.name = f'{letters}{digits}'
        while self.name not in robot_names:
            robot_names.add(self.name)
            return self.name

    def reset(self):
        self.__init__()
