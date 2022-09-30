export const steps = (n, times = 0) => {
  if (n <= 0) {
    throw 'Only positive numbers are allowed';
  }
  if (n === 1) {
    return times;
  }
  if (n % 2 === 0) {
    return steps(n / 2, (times += 1));
  }
  return steps(3 * n + 1, (times += 1));
};
