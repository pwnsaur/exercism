export class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
	}

  isPossible() {
    return this.
  }

	isEquilateral() {
		return this.a === this.b && this.a === this.c && this.a > 0;
	}

	isIsosceles() {
		return this.a === this.b || this.a === this.c || this.b === this.c;
	}

	isScalene() {
		throw new Error('Remove this statement and implement this function');
	}
}
