export const score = (a, b) => {
  const value = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  switch (true) {
    case value <= 1:
      return 10;
    case value <= 5:
      return 5;
    case value <= 10:
      return 1;
    default:
      return 0;
  }
};
