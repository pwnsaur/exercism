export function translate2d(dx, dy) {
  const translate = (x, y) => [x + dx, y + dy];
  return translate;
}

export function scale2d(sx, sy) {
  const scale = (x, y) => [x * sx, y * sy];
  return scale;
}

export function composeTransform(f, g) {
  const compose = (x, y) => g(...f(x, y));
  return compose;
}

export function memoizeTransform(f) {
  let X;
  let Y;
  let result;

  const memoizeResult = (x, y) => {
    if (x === X && y === Y) return result;
    X = x;
    Y = y;
    result = f(x, y);
    return result;
  };
  return memoizeResult;
}
