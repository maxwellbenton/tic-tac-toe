function PlayerButton({
  value,
  handlePlayerButtonClick,
}: {
  value: string;
  handlePlayerButtonClick: (
    event: React.MouseEvent<EventTarget & HTMLDivElement, MouseEvent>,
  ) => void;
}) {
  return (
    <div className="player-button" onClick={handlePlayerButtonClick}>
      {value}
    </div>
  );
}

export default PlayerButton;
