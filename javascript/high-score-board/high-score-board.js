export function createScoreBoard() {
  return { 'The Best Ever': 1000000 };
}

export function addPlayer(scoreBoard, player, score) {
  scoreBoard[player] = score;
  return scoreBoard;
}

export function removePlayer(scoreBoard, player) {
  delete scoreBoard[player];
  return scoreBoard;
}

export function updateScore(scoreBoard, player, points) {
  scoreBoard[player] += points;
  return scoreBoard;
}

export function applyMondayBonus(scoreBoard) {
  for (const player in scoreBoard) {
    scoreBoard[player] += 100;
  }
  return scoreBoard;
}

export function normalizeScore({ normalizeFunction, score }) {
  return normalizeFunction(score);
}
