import re

only_digits_pattern = re.compile(r'^[2-9][0-9]{2}[2-9][0-9]{6}$')


class PhoneNumber:
    def __init__(self, number):
        self.number = re.sub(r'\D', '', number)
        self.number = re.sub(r'^[^2-9]', '', self.number)
        self.area_code = self.number[:3]

        if not only_digits_pattern.match(self.number):
            raise ValueError('invalid input format')

    def pretty(self):
        return re.sub(r'(\d{3})(\d{3})(\d{4})', r'(\1)-\2-\3', self.number)
