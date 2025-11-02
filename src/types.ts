export type Player = "X" | "O";

export type GameData = {
  board: GameCell[][];
  status: "start" | "playing" | "end";
  currentTurnPlayer?: Player;
  turn: number;
  winHistory: (string | null)[];
};

export type GameCell = {
  value: Player | null;
};
