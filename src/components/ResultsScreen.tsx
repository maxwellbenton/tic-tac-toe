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
    <div className="results-container">
      <h1>
        {gameData.winHistory[gameData.winHistory.length - 1]
          ? `${gameData.winHistory[gameData.winHistory.length - 1]} wins!`
          : "Tied Game"}
      </h1>
      
      {gameData.winHistory.length > 0 && (
        <>
          <h2>Game History</h2>
          <div className="win-history">
            {gameData.winHistory.map((winner, index) => (
              <div key={index} className="win-badge">
                Game {index + 1}: {winner || "Tie"}
              </div>
            ))}
          </div>
        </>
      )}
      
      <h2>Choose X or O to Play Again</h2>
      <div className="player-selection">
        <PlayerButton
          value="X"
          handlePlayerButtonClick={handlePlayerButtonClick}
        />
        <PlayerButton
          value="O"
          handlePlayerButtonClick={handlePlayerButtonClick}
        />
      </div>
    </div>
  );
}

export default ResultsScreen;
