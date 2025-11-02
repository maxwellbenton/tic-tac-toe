import type { GameCell, GameData } from "../types";

function GameScreen({
  gameData,
  handleGameCellClick,
}: {
  gameData: GameData;
  handleGameCellClick: ({
    rowIndex,
    colIndex,
  }: {
    rowIndex: number;
    colIndex: number;
  }) => void;
}) {
  return (
    <>
      <h1>{`Game ${gameData.winHistory.length + 1}`}</h1>
      <h2>{`${gameData.currentTurnPlayer}'s Turn`}</h2>

      {gameData.board.map((boardRow: GameCell[], rowIndex: number) => {
        return (
          <div className="game-board">
            <div
              key={"row-" + rowIndex}
              className={`board-row ${rowIndex > 0 ? "has-top-border" : ""}`}
            >
              {boardRow.map((gameCell: GameCell, colIndex: number) => (
                <div
                  key={"row-" + rowIndex + "-col-" + colIndex}
                  className={`board-cell ${
                    gameCell.value ? "filled" : "open"
                  } ${colIndex > 0 ? "has-left-border" : ""}`}
                  onClick={() => {
                    if (!gameCell.value)
                      handleGameCellClick({ rowIndex, colIndex });
                  }}
                >
                  {gameCell.value}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default GameScreen;
