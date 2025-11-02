import PlayerButton from "./PlayerButton";

function StartScreen({
  handlePlayerButtonClick,
}: {
  handlePlayerButtonClick: (
    event: React.MouseEvent<EventTarget & HTMLDivElement>,
  ) => void;
}) {
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <h2>Choose X or O to Start</h2>
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

export default StartScreen;
