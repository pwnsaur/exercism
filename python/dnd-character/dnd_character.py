from random import randint


def modifier(const):
    return ((const - 10)/2)//1


class Character:
    throw = sorted([randint(1, 6) for i in range(4)])[1:4]
    throw_sum = sum(throw)

    def __init__(self):
        self.strength = Character.throw_sum
        self.dexterity = Character.throw_sum
        self.constitution = Character.throw_sum
        self.intelligence = Character.throw_sum
        self.wisdom = Character.throw_sum
        self.charisma = Character.throw_sum
        self.hitpoints = 10 + modifier(self.constitution)
