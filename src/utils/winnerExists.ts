import type { GameData } from "../types";

export function winnerExists(updatedGameData: GameData) {
  let winner: string | null = null;
  let containsNulls = false;
  let testSet = [];

  for (let row = 0; row < 3; row++) {
    testSet = [
      ...new Set([
        updatedGameData.board[row][0].value,
        updatedGameData.board[row][1].value,
        updatedGameData.board[row][2].value,
      ]),
    ];
    if (testSet.includes(null)) containsNulls = true;
    if (testSet.length === 1 && !testSet.includes(null)) {
      winner = testSet[0];
    }
  }

  for (let col = 0; col < 3; col++) {
    testSet = [
      ...new Set([
        updatedGameData.board[0][col].value,
        updatedGameData.board[1][col].value,
        updatedGameData.board[2][col].value,
      ]),
    ];
    if (testSet.includes(null)) containsNulls = true;
    if (testSet.length === 1 && !testSet.includes(null)) {
      winner = testSet[0];
    }
  }

  testSet = [
    ...new Set([
      updatedGameData.board[0][0].value,
      updatedGameData.board[1][1].value,
      updatedGameData.board[2][2].value,
    ]),
  ];
  if (testSet.length === 1 && !testSet.includes(null)) {
    winner = testSet[0];
  }

  testSet = [
    ...new Set([
      updatedGameData.board[0][2].value,
      updatedGameData.board[1][1].value,
      updatedGameData.board[2][0].value,
    ]),
  ];
  if (testSet.length === 1 && !testSet.includes(null)) {
    winner = testSet[0];
  }

  if (winner || !containsNulls) {
    return winner;
  } else {
    return false;
  }
}
