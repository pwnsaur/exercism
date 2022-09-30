const isNotZero = sides => sides > 0;
const notEqualityViolation = sides => {
  sides.sort();
  if (sides[0] + sides[1] > sides[2]) {
    return true;
  }
  return false;
};
const noEqualSides = sides => new Set(sides).size === sides.length;

export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }

  isEquilateral() {
    if (this.sides.every(isNotZero)) {
      if (this.sides.every(side => side === this.sides[0])) {
        return true;
      }
    }
    return false;
  }

  isIsosceles() {
    if (this.sides.every(isNotZero)) {
      if (notEqualityViolation(this.sides)) {
        if (!noEqualSides(this.sides)) {
          return true;
        }
      }
    }
    return false;
  }

  isScalene() {
    if (this.sides.every(isNotZero)) {
      if (notEqualityViolation(this.sides)) {
        if (noEqualSides(this.sides)) {
          return true;
        }
      }
    }
    return false;
  }
}
