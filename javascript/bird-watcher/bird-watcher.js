export function totalBirdCount(birdsPerDay) {
  return birdsPerDay.reduce((total, current) => total + current, 0);
}

export function birdsInWeek(birdsPerDay, week) {
  return birdsPerDay
    .slice((week - 1) * 7, week * 7)
    .reduce((total, current) => total + current, 0);
}

export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i] += 1;
  }
  return birdsPerDay;
}
