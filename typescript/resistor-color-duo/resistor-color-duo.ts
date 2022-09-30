enum Colors {
  black,
  brown,
  red,
  orange,
  yellow,
  green,
  blue,
  violet,
  grey,
  white,
}

export const decodedValue = (color: (keyof typeof Colors)[]): number =>
  parseInt(`${Colors[color[0]]}${Colors[color[1]]}`);
