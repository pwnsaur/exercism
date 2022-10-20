export function needsLicense(kind) {
  return kind === 'car' || kind === 'truck';
}

export function chooseVehicle(option1, option2) {
  const comment = ' is clearly the better choice.';
  return option1 < option2 ? option1 + comment : option2 + comment;
}

export function calculateResellPrice(originalPrice, age) {
  if (age < 3) return originalPrice * 0.8;
  if (age <= 10) return originalPrice * 0.7;
  return originalPrice * 0.5;
}
