import React from "react";
import "./PlayerStation.scss";
import PlayerPulledCard from "./PlayerPulledCard/PlayerPulledCard";

const PlayerStation = ({
  name,
  index,
  playersCount,
  playerScore,
  playerCards,
  playerStatus,
  activePlayer,
}) => {
  // Declare classnames dependent on index number
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

  // Create pulled cards object
  let cards = [];
  if (playerCards) {
    cards = playerCards.map((card, index) => (
      <PlayerPulledCard
        key={index}
        cardValue={card.cardValue}
        cardSuit={card.cardSuit}
        cardImage={card.cardImage}
      />
    ));
  }

  return (
    <div className={playerClass}>
      <h3 className="game__player-name" id={`player-${index}-position-name`}>
        {name}
      </h3>
      <div className="game__player-cards" id={`cards-${index}`}>
        {cards}
      </div>
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
