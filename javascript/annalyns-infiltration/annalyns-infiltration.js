export function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake;
}

export function canSpy(enemies) {
  return enemies.some(enemy => enemy);
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return !archerIsAwake && prisonerIsAwake;
}

export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  return (
    (petDogIsPresent && !archerIsAwake) ||
    (prisonerIsAwake && !archerIsAwake && !knightIsAwake)
  );
}
