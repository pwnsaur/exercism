export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5;
  }
}

export function limesToCut(wedgesNeeded, limes) {
  let limesNeeded = 0;
  let wedgesCut = 0;

  for (const lime in limes) {
    while (wedgesCut < wedgesNeeded && limesNeeded < limes.length) {
      switch (limes[limesNeeded]) {
        case 'small':
          wedgesCut += 6;
          break;
        case 'medium':
          wedgesCut += 8;
          break;
        case 'large':
          wedgesCut += 10;
          break;
      }
      limesNeeded++;
    }
  }
  return limesNeeded;
}

export function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0) {
    timeLeft -= timeToMixJuice(orders[0]);
    orders.shift();
  }
  return orders;
}
