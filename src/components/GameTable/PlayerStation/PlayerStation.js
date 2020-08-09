import React from "react";
import "./PlayerStation.scss";

const PlayerStation = ({
  name,
  index,
  playersCount,
  playerScore,
  playerStatus,
  activePlayer,
}) => {
  // Declare classnames dependency on index number
  let classNumber;
  // For two players set them in duel positions
  if (playersCount > 2) {
    switch (index) {
      case 0:
        classNumber = "one";
        break;
      case 1:
        classNumber = "two";
        break;
      case 2:
        classNumber = "three";
        break;
      case 3:
        classNumber = "four";
        break;
      default:
        classNumber = "zero";
    }
  } else {
    switch (index) {
      case 0:
        classNumber = "one";
        break;
      case 1:
        classNumber = "three";
        break;
      default:
        classNumber = "zero";
    }
  }

  // Check if player is active
  let playerClass;
  if (activePlayer !== index) {
    playerClass = `game__player game__player-${classNumber}`;
  } else {
    playerClass = `game__player game__player-${classNumber} game__player--active`;
  }

  return (
    <div className={playerClass}>
      <h3 className="game__player-name" id={`player-${index}-position-name`}>
        {name}
      </h3>
      <div className="game__player-cards" id={`cards-${index}`}></div>
      <span className="game__player-score" id={`score-${index}`}>
        {`Points: ${playerScore}/21`}
      </span>
      <span className="game__player-status" id={`status-${index}`}>
        {playerStatus}
      </span>
    </div>
  );
};

export default PlayerStation;
