import { useState } from "react";
import type { GameData, Player } from "./types";
import "./App.css";
import { textIsPlayer } from "./guards";
import StartScreen from "./components/StartScreen";
import GameScreen from "./components/GameScreen";
import ResultsScreen from "./components/ResultsScreen";
import { winnerExists } from "./utils/winnerExists";

function App() {
  const [gameData, setGameData] = useState<GameData>({
    board: [
      [{ value: null }, { value: null }, { value: null }],
      [{ value: null }, { value: null }, { value: null }],
      [{ value: null }, { value: null }, { value: null }],
    ],
    status: "start",
    turn: 0,
    winHistory: [],
  });

  const handlePlayerButtonClick = (
    event: React.MouseEvent<EventTarget & HTMLDivElement>,
  ) => {
    const currentTarget = event.currentTarget.innerText;
    setGameData((currentGameData) => {
      if (textIsPlayer(currentTarget)) {
        return {
          ...currentGameData,
          board: [
            [{ value: null }, { value: null }, { value: null }],
            [{ value: null }, { value: null }, { value: null }],
            [{ value: null }, { value: null }, { value: null }],
          ],
          currentTurnPlayer: currentTarget,
          status: "playing",
        };
      } else {
        return currentGameData;
      }
    });
  };

  const handleGameCellClick = ({
    rowIndex,
    colIndex,
  }: {
    rowIndex: number;
    colIndex: number;
  }) => {
    setGameData((currentGameData) => {
      if (currentGameData.currentTurnPlayer) {
        currentGameData.board[rowIndex][colIndex] = {
          value: currentGameData.currentTurnPlayer,
        };

        const newGameData = {
          ...currentGameData,
          board: currentGameData.board,
          currentTurnPlayer:
            currentGameData.currentTurnPlayer === "X"
              ? ("O" as Player)
              : ("X" as Player),
        };
        const winner = winnerExists(newGameData);

        if (winner) {
          return {
            ...currentGameData,
            currentTurnPlayer: undefined,
            status: "end",
            winHistory: [...currentGameData.winHistory, winner],
          };
        } else {
          return newGameData;
        }
      }

      return currentGameData;
    });
  };

  const displayGameScreen = () => {
    switch (gameData.status) {
      case "start":
        return (
          <StartScreen handlePlayerButtonClick={handlePlayerButtonClick} />
        );
      case "playing":
        return (
          <GameScreen
            gameData={gameData}
            handleGameCellClick={handleGameCellClick}
          />
        );
      case "end":
        return (
          <ResultsScreen
            gameData={gameData}
            handlePlayerButtonClick={handlePlayerButtonClick}
          />
        );
    }
  };
  return <>{displayGameScreen()}</>;
}

export default App;
