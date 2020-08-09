import React from "react";
import "./PlayerStation.scss";

const PlayerStation = ({ name, index }) => {
  // Declare classnames dependency on index number
  let classNumber;
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

  return (
    <div className={`game__player game__player-${classNumber}`}>
      <h3 className="game__player-name" id={`player-${index}-position-name`}>
        {name}
      </h3>
      <div className="game__player-cards" id={`cards-${index}`}></div>
      <span className="game__player-score" id={`score-${index}`}>
        Points: 0/21
      </span>
      <span className="game__player-status" id={`status-${index}`}>
        In game
      </span>
    </div>
  );
};

export default PlayerStation;
