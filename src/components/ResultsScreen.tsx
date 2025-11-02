import type { GameData } from "../types";
import PlayerButton from "./PlayerButton";

function ResultsScreen({
  gameData,
  handlePlayerButtonClick,
}: {
  gameData: GameData;
  handlePlayerButtonClick: (
    event: React.MouseEvent<EventTarget & HTMLDivElement>,
  ) => void;
}) {
  return (
    <>
      <h1>
        {gameData.winHistory[gameData.winHistory.length - 1]
          ? `${gameData.winHistory[gameData.winHistory.length - 1]} wins!`
          : "Tied Game"}
      </h1>
      <h2>Choose X or O to Play Again</h2>
      <div className="board-row">
        <PlayerButton
          value="X"
          handlePlayerButtonClick={handlePlayerButtonClick}
        />
        <PlayerButton
          value="O"
          handlePlayerButtonClick={handlePlayerButtonClick}
        />
      </div>
    </>
  );
}

export default ResultsScreen;
